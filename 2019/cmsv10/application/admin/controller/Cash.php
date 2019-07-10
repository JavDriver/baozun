<?php
namespace app\admin\controller;
use think\Db;

class Cash extends Base
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $param = input();
        $param['page'] = intval($param['page']) <1 ? 1 : $param['page'];
        $param['limit'] = intval($param['limit']) <1 ? $this->_pagesize : $param['limit'];
        $where=[];
        if($param['status']!=''){
            $where['cash_status'] = ['eq',$param['status']];
        }
        if(!empty($param['uid'])){
            $where['user_id'] = ['eq',$param['uid'] ];
        }
        if(!empty($param['wd'])){
            $where['cash_bank_no'] = ['like','%'.$param['wd'].'%' ];
        }

        $order='cash_id desc';
        $res = model('Cash')->listData($where,$order,$param['page'],$param['limit']);

        $this->assign('list',$res['list']);
        $this->assign('total',$res['total']);
        $this->assign('page',$res['page']);
        $this->assign('limit',$res['limit']);

        $param['page'] = '{page}';
        $param['limit'] = '{limit}';
        $this->assign('param',$param);

        $this->assign('title','提现管理');
        return $this->fetch('admin@cash/index');
    }

    public function del()
    {
        $param = input();
        $ids = $param['ids'];
        $all = $param['all'];
        if(!empty($ids)){
            $where=[];
            $where['cash_id'] = ['in',$ids];
            if($all==1){
                $where['cash_id'] = ['gt',0];
            }
            $res = model('Cash')->delData($where);
            if($res['code']>1){
                return $this->error($res['msg']);
            }
            return $this->success($res['msg']);
        }
        return $this->error('参数错误');
    }

    public function audit()
    {
        $param = input();
        $ids = $param['ids'];
        if(!empty($ids)){
            $where=[];
            $where['cash_id'] = ['in',$ids];

            $list = model('Cash')->where($where)->select();
            foreach($list as $k=>$v){
                $where2=[];
                $where2['user_id'] = $v['user_id'];
                $user = model('User')->where($where2)->value('user_points');
                if(intval($user) >= $v['cash_points']){
                    $update=[];
                    $update['cash_status'] = 1;
                    $update['cash_time_audit'] = time();
                    $r = model('Cash')->where($where)->update($update);
                    if($r) {
                        model('User')->where($where2)->setDec('user_points', $v['cash_points']);
                    }
                }
            }
            return $this->success('审核成功');
        }
        return $this->error('参数错误');
    }

}
