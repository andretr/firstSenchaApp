Ext.define('FirstSenchaAppAndre.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar','Ext.Carousel','Ext.dataview.List', 'FirstSenchaAppAndre.view.PollView'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Andre Ticona\'s First Sencha App'
                },
                style: {
                	background: 'white'}
                ,
                	html: [
                    "Welcome. The theme for my fisrt Sencha App is the recent draw for UEFA Champions League Quarter finals. I made use of Sencha UI tools to show images, lists and forms. Enjoy!."
                ].join("")
            },
            
            {
                title: 'Pictures',
                iconCls: 'star',
                xtype: 'carousel',
                direction: 'horizontal',
                defaults: {
                    xtype: 'tabpanel',
                    styleHtmlContent: true
                },
                items:[
               
                 {
                	html: '<div style:"align:center"><p>The Draw</p>'+ '<div style="width:' 
                    + window.innerWidth 
                    + 'px;height:' + 'px;"><img src=' 
                         +  
                   'resources/images/uefacl1.jpg'
                    + ' style="width: 30%;height: 30%;" /></div></div>'
                 },
                 {
                	 html: '<div style:"align:center"><p>The Stadium</p>'+ '<div style="width:' 
                     + window.innerWidth 
                     + 'px;height:' + 'px;"><img src=' 
                          +  
                    'resources/images/uefacl2.jpg'
                     + ' style="width: 30%;height: 30%;" /></div></div>'
                 }
                 ,
                 {
                	 html: '<div style:"align:center"><p>The Prize</p>'+ '<div style="width:' 
                     + window.innerWidth 
                     + 'px;height:' + 'px;"><img src=' 
                          +  
                    'resources/images/uefacl3.jpg'
                     + ' style="width: 30%;height: 30%;" /></div></div>'
                 }
                 ]
                
            },

            {
                title: 'Schedule',
                iconCls: 'time',
                xtype   : 'list',
                itemTpl : '{title}',
                    data    : [
                        { title : 'FC Barcelona vs Atletico Madrid: 1 April 2014' },
                        { title : 'Real Madrid FC vs Borussia Dortmund: 1 April 2014' },
                        { title : 'Paris Saint Germain vs Chelsea FC: 2 April 2014' },
                        { title : 'Manchester United FC vs FC Bayern Munchen: 2 April 2014' }
                    ],
                    items   : [
                        {
                            xtype  : 'titlebar',
                            title  : 'Schedule',
                            docked : 'top',
                        }
                    ]
                
                	
            },
                        {
                title: 'Poll',
                iconCls: 'info',
                xtype: 'pollview'
            }
            
        ]
    }
});
