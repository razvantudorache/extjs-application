/**
 * Created by Razvan on 16.05.2016.
 */
Ext.define('MyApp.view.admin.MostVisitedPOI', {
    extend: 'Ext.Panel',
    alias: 'widget.mostvisitedpoi',
    requires: ['Ext.chart.theme.Muted'],
    width: 650,

    items: [{
        xtype: 'cartesian',
        width: '100%',
        height: 400,
        theme: 'Muted',
        insetPadding: '70 40 0 40',
        interactions: ['itemhighlight'],
        animation: {
            duration: 200
        },
        store: {
            type: 'two-year-sales'
        },
        legend: {
            docked: 'bottom'
        },
        sprites: [{
            type: 'text',
            text: 'Sales in Last Two Years',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            width: 100,
            height: 30,
            x: 325, // the sprite x position
            y: 30  // the sprite y position
        }, {
            type: 'text',
            text: 'Quarter-wise comparison',
            textAlign: 'center',
            fontSize: 16,
            x: 325,
            y: 50
        }],
        axes: [{
            type: 'numeric3d',
            position: 'left',
            fields: ['2013', '2014'],
            grid: true,
            title: 'Sales in USD'
        }, {
            type: 'category3d',
            position: 'bottom',
            fields: 'quarter',
            title: {
                text: 'Quarter',
                translationX: -30
            },
            grid: true
        }],
        series: {
            type: 'bar3d',
            stacked: false,
            title: ['Previous Year', 'Current Year'],
            xField: 'quarter',
            yField: ['2013', '2014'],
            label: {
                field: ['2013', '2014'],
                display: 'insideEnd'
            },
            highlight: true,
            style: {
                inGroupGapWidth: -7
            }
        }
    }]

});