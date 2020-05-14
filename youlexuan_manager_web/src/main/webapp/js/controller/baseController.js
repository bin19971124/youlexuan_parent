// 定义一个控制器用于控制数据分页显示
app.controller('baseController',function ($scope) {
    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();//重新加载
        }
    };
    //重新加载列表 数据
    $scope.reloadList=function(){
        //切换页码
        /* $scope.findPage( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);*/
        $scope.search( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    };
// 删除品牌信息
    //选中的ID集合
    $scope.selectIds=[];
    //更新复选
    $scope.updateSelection = function($event, id) {
        //如果是被选中,则增加到数组
        if($event.target.checked){
            $scope.selectIds.push(id);
        }else{
            var idx = $scope.selectIds.indexOf(id);
            //删除
            $scope.selectIds.splice(idx, 1);
        }
        /*console.log($scope.selectIds);*/
    };

    //提取json字符串数据中某个属性，返回拼接字符串 逗号分隔
    $scope.jsonToString=function(jsonString,key){
        var json=JSON.parse(jsonString);//将json字符串转换为json对象
        var value="";
        for(var i=0;i<json.length;i++){
            if(i>0){
                value+=","
            }
            value+=json[i][key];
        }
        return value;
    };


});