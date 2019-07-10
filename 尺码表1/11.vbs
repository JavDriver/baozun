<Window x: Name="closing" x: Class="BBdemo.MainWindow"
xmlns="http://schcmas.microsoft.com/winfx/2006/xaml/presentation"
xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
xmlns:d="http://schemas.microsoftcom/expression/blend/2008"
kmlns:mc="http://schemas.opcnxmlformats.org/markup-compatibility/2006"
xmlns:local=clr-namcspacc:BBdemo"
mc:Ignorable="d"
Title="MainWindow" Height="450" Width="800" Closing="closing_Closing">
<Grid>
<Grid.Background>
<ImageBrush/>
</Grid.Background>
<Button Name=btnl" Content="同意" HorizontalAlignment="Left" Margin=168,326,0,0"
VerticalAlignment="Top" Width="93" Height="42" Click="Button_Click"/>
<Label Name="lab1 "Content="表白信" HorizontalAlignment=Left" Margin="33,44,0,0"
VerticalAlignment="Top" Height=59" Width="129 FontSize="36" FontStyle="Italic"/>
<Lebe1 Neme="1ab2" Content="做我女朋友好吗?&#xD;&#xA;&#x9;"
HorizontalAlignment="Left" Height="60" Margin="493,200,0,0" VerticalAlignment="Top"
Width="281" FontSize="36"/>
<Button Name="btn3" Visibility="Hidden" Content="退出" HorizontalAlignment="Left"
Height="42" Margin="326,326,0,0" VerticalAlignment="Top" Width="90" Click="Button_Click_1/>
<Image Margin="206,10,316.6,109 Source=biaobai.png" Stretch="Fill"/>
<Button Name="btn2" Content="不同意” HorizontalAlignment="Left"
Margin="493,326,0,0" verticalAlignment="Top" Width="93" Height="42"
MouseEnter="Button_MouseEnter" />
</Grid>
</window>
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using Syslem Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.windows Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
namespace BBdemo
{
public partial class MainWindow : Window
{
   public MainWindow()
   {
InitializeComponent();
}
private void Button_MouseEnter(object sender, MouseEventArgs e)
{
Random rd = new Random();
Button btn = sender as Button;
double maxW= this.Width;
double maxH=this.Height;
double w=btn.width;
double h=btn.height;
double l=rd.Next(0, (int)(maxW-w);
double t =rd Next(0, (int)(maxH - h);
btn.Margin = new Thickness(l, t, 0, 0);
}
private void closing_Closing(object sender, System.ComponentModel.CancelEventArgs e)
{
MessageBox.Show("关不掉!");
e.Cancel = true;
}

private void Button_Click(object sender, RoutedEventArgs e)
{
lab1.Visibility = System.Windows.Visibility.Hidden:
lab2.Content = "谢谢炮妇!";
btn3.Visibility = System.Windows.Visibility.visible;
btnl.Visibility = System.Windows.Visibility.Hidden;
btn2.Visibility = System.Windows.visibility.Hidden;
}
private void Button_Click_1(object sender, RoutedEventArgs e)
{
System Environment.Exit(0);
}
}
}









