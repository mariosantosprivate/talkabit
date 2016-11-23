/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='assets/images/spin/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'TAB-ANIM-3',
                            type: 'image',
                            rect: ['253px', '5px', '412px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"TAB-ANIM-3.2.svg",'0px','0px']
                        },
                        {
                            id: 'TAB-ANIM-2',
                            type: 'image',
                            rect: ['11px', '0', '210px', '210px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"TAB-ANIM-2.svg",'0px','0px'],
                            transform: [[],['-360']]
                        },
                        {
                            id: 'TAB-ANIM-1',
                            type: 'image',
                            rect: ['20px', '165px', '37px', '36px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"TAB-ANIM-1.svg",'0px','0px']
                        },
                        {
                            id: 'TAB-ANIM-4',
                            type: 'image',
                            rect: ['0', '0', '681px', '210px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"TAB-ANIM-4.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '680px', '210px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3700,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid26",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,0.00)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid35",
                            "opacity",
                            690,
                            10,
                            "easeInOutSine",
                            "${TAB-ANIM-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "left",
                            1600,
                            0,
                            "easeInOutSine",
                            "${TAB-ANIM-1}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid2",
                            "rotateZ",
                            700,
                            3000,
                            "easeInOutSine",
                            "${TAB-ANIM-2}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid30",
                            "opacity",
                            690,
                            10,
                            "easeInOutSine",
                            "${TAB-ANIM-4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid37",
                            "opacity",
                            690,
                            10,
                            "easeInOutSine",
                            "${TAB-ANIM-2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("tab-anim-both_edgeActions.js");
})("EDGE-2684740");
