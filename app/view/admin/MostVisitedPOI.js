/**
 * Created by Razvan on 16.05.2016.
 */
Ext.define('MyApp.view.admin.MostVisitedPOI', {
    extend: 'Ext.Panel',
    alias: 'widget.mostvisitedpoi',
    requires: [
        'Ext.chart.theme.Muted',
        'MyApp.store.admin.MostVisitedPOI',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Numeric3D',
        'Ext.chart.grid.HorizontalGrid3D',
        'Ext.chart.axis.Category3D',
        'Ext.chart.grid.VerticalGrid3D',
        'Ext.chart.series.Bar3D',
        'Ext.chart.interactions.ItemHighlight'
    ],
    width: 650,


    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            layout: 'fit',
            items: [{
                xtype: 'cartesian',
                width: '100%',
                theme: 'Muted',
                insetPadding: '70 40 0 40',
                interactions: ['itemhighlight'],
                animation: {
                    duration: 200
                },
                store: me.initStore(),
                legend: {
                    docked: 'bottom'
                },
                sprites: [{
                    type: 'text',
                    text: 'Chart with most visited POI',
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    width: 100,
                    height: 30,
                    x: 325, // the sprite x position
                    y: 30  // the sprite y position
                }],
                axes: [{
                    type: 'numeric3d',
                    position: 'left',
                    fields: ['rating', 'visited'],
                    grid: true,
                    title: 'Rating and number of visits'
                }, {
                    type: 'category3d',
                    position: 'bottom',
                    fields: 'name',
                    title: {
                        text: 'Name of POIs',
                        translationX: -30
                    },
                    grid: true
                }],
                series: {
                    type: 'bar3d',
                    stacked: false,
                    title: ['Rating', 'Number of visits'],
                    xField: 'name',
                    yField: ['rating', 'visited'],
                    label: {
                        field: ['rating', 'visited'],
                        display: 'insideEnd'
                    },
                    highlight: true,
                    style: {
                        inGroupGapWidth: -7
                    },
                    tooltip: {
                        trackMouse: true,
                        width: 200,
                        height: 80,
                        renderer: function(toolTip, record, ctx) {
                            
                            if (Ext.isEmpty(record.data.rating)) {
                                record.data.rating = 0;
                            }
                            var tplToolTip =
                                '<div class="toolTipContainer">' +
                                    '<article class="name">' + record.data.name + '</article>' +
                                    '<article class="rating">Rating: ' + record.data.rating + ' stars</article>' +
                                    '<article class="visited">Visited:' + record.data.visited + ' times</article>' +
                                '</div>';
                            toolTip.setHtml(tplToolTip);
                        }
                    }
                }
            }]
        });
        me.callParent(arguments);
    },

    initStore: function () {
        var me = this;

        me.storeReference = Ext.create('MyApp.store.admin.MostVisitedPOI');
        me.storeReference.proxy.url = me.url;
        me.storeReference.load();
        return me.storeReference;
    }


});