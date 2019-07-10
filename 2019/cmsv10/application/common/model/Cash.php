<?php
namespace app\common\model;
use think\Db;

class Cash extends Base {
    // 设置数据表（不含前缀）
    protected $name = 'cash';

    // 定义时间戳字段名
    protected $createTime = '';
    protected $updateTime = '';

    // 自动完成
    protected $auto       = [];
    protected $insert     = [];
    protected $update     = [];


    public function listData($where,$order,$page=1,$limit=20,$start=0)
    {
        if(!is_array($where)){
            $where = json_decode($where,true);
        }
        $limit_str = ($limit * ($page-1) + $start) .",".$limit;
        $total = $this->where($where)->count();
        $list = Db::name('Cash')->where($where)->order($order)->limit($limit_str)->select();

        $user_ids=[];
        foreach($list as $k=>&$v){
            if($v['user_id'] >0){
                $user_ids[$v['user_id']] = $v['user_id'];
            }
        }

        if(!empty($user_ids)){
            $where2=[];
            $where['user_id'] = ['in', $user_ids];
            $order='user_id desc';
            $user_list = model('User')->listData($where2,$order,1,999);
            $user_list = mac_array_rekey($user_list['list'],'user_id');

            foreach($list as $k=>&$v){
                $list[$k]['user_name'] = $user_list[$v['user_id']]['user_name'];
            }
        }

        return ['code'=>1,'msg'=>'数据列表','page'=>$page,'pagecount'=>ceil($total/$limit),'limit'=>$limit,'total'=>$total,'list'=>$list];
    }

    public function infoData($where,$field='*')
    {
        if(empty($where) || !is_array($where)){
            return ['code'=>1001,'msg'=>'参数错误'];
        }
        $info = $this->field($field)->where($where)->find();

        if(empty($info)){
            return ['code'=>1002,'msg'=>'获取数据失败'];
        }
        $info = $info->toArray();

        return ['code'=>1,'msg'=>'获取成功','info'=>$info];
    }

    public function saveData($data)
    {
        $data['cash_money']  = floatval($data['cash_money']);

        if($GLOBALS['config']['user']['cash_status'] !='1'){
            return ['code'=>1005,'msg'=>'提现功能未开启！'];
        }

        if($data['cash_money'] < $GLOBALS['config']['user']['cash_min']){
            return ['code'=>1006,'msg'=>'最低提现金额：'.$GLOBALS['config']['user']['cash_min'] ];
        }

        $tx_points = intval($data['cash_money'] * $GLOBALS['config']['user']['cash_ratio']);
        if($tx_points > $GLOBALS['user']['user_points']){
            return ['code'=>1007,'msg'=>'提现太多了,没有这么多积分哦！'];
        }

        $data['cash_bank_name'] = htmlspecialchars(urldecode(trim($data['cash_bank_name'])));
        $data['cash_bank_no'] = htmlspecialchars(urldecode(trim($data['cash_bank_no'])));
        $data['cash_payee_name'] = htmlspecialchars(urldecode(trim($data['cash_payee_name'])));


        $data['cash_points'] = $tx_points;
        $data['cash_time'] = time();

        $validate = \think\Loader::validate('Cash');
        if(!$validate->check($data)){
            return ['code'=>1001,'msg'=>'参数错误：'.$validate->getError() ];
        }

        if($data['user_id']==0 ) {
            return ['code'=>1002,'msg'=>'参数非法'];
        }

        if(!empty($data['cash_id'])){
            $where=[];
            $where['cash_id'] = ['eq',$data['cash_id']];
            $res = $this->allowField(true)->where($where)->update($data);
        }
        else{
            $res = $this->allowField(true)->insert($data);
        }
        if(false === $res){
            return ['code'=>1004,'msg'=>'保存失败：'.$this->getError() ];
        }
        return ['code'=>1,'msg'=>'保存成功'];
    }

    public function delData($where)
    {
        $res = $this->where($where)->delete();
        if($res===false){
            return ['code'=>1001,'msg'=>'删除失败：'.$this->getError() ];
        }
        return ['code'=>1,'msg'=>'删除成功'];
    }

    public function fieldData($where,$col,$val)
    {
        if(!isset($col) || !isset($val)){
            return ['code'=>1001,'msg'=>'参数错误'];
        }

        $data = [];
        $data[$col] = $val;
        $res = $this->allowField(true)->where($where)->update($data);
        if($res===false){
            return ['code'=>1001,'msg'=>'设置失败：'.$this->getError() ];
        }
        return ['code'=>1,'msg'=>'设置成功'];
    }

}