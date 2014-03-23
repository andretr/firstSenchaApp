Ext.define('FirstSenchaAppAndre.view.PollView', {
    extend: 'Ext.form.Panel',
    xtype: 'pollview',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Toggle',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.field.Radio',
        'Ext.Button'
    ],
    config: {
        items:[{
            xtype: 'fieldset',
            title: 'Which match are you looking for the most?.',
            instructions: 'This is a dummy form, the controller is not yet defined',
            items: [
                
                 {
                     xtype: 'radiofield',
                     name : 'color',
                     value: '1',
                     label: 'FC Barcelona vs Atletico Madrid',
                     checked: true
                 },
                 {
                     xtype: 'radiofield',
                     name : 'color',
                     value: '2',
                     label: 'Real Madrid FC vs Borussia Dortmund'
                 },
                 {
                     xtype: 'radiofield',
                     name : 'color',
                     value: '3',
                     label: 'Paris Saint Germain vs Chelsea FC'
                 }
                ,
                {
                    xtype: 'radiofield',
                    name : 'color',
                    value: '4',
                    label: 'Manchester United FC vs FC Bayern Munchen'
                },
                
                {
                    xtype: 'button',
                    text: 'Submit',
                    action: 'Submit',
                    margin: '10 5',
                    ui: 'confirm'
                }
            ]        
        }]
    }
});