import React, { Component } from 'react';

class Landing extends Component {

    componentDidMount(){
        window.Pts.quickStart( "#pt", "#123" );

        (function() {
     
            var pairs = [];
            window.space.add({
                start:( bound ) => {
                    let r = window.space.size.minValue().value/2;
                    // create 200 lines
                    for (let i=0; i<100; i++) {
                        let ln = new window.Group(window.Pt.make(2, r, true), window.Pt.make(2, -r, true) );
                        ln.moveBy(window.space.center).rotate2D(i*Math.PI/100, window.space.center );
                        pairs.push(ln );
                    }
                },
           
                animate: (time, ftime) => {     
                    for (let i=0, len=pairs.length; i<len; i++) {
                        // rotate each line by 0.1 degree and check collinearity with pointer
                        let ln = pairs[i];
                        ln.rotate2D(window.Const.one_degree/20, window.space.center );
                        let collinear = window.Line.collinear( ln[0], ln[1], window.space.pointer, 0.1);
                
                        if (collinear) {
                            //form.stroke("#fff").line(ln);
                        } else {
                            // if not collinear, color the line based on whether the pointer is on left or right side
                            let side = window.Line.sideOfPt2D( ln, window.space.pointer );
                            window.form.stroke( (side<0) ? "rgba(255,255,0,.1)" : "rgba(0,255,255,.1)" ).line( ln );
                        }
                        window.form.fillOnly("rgba(255,255,255,0.8").points( ln, 0.5);
                    }
                }
            });
            window.space.bindMouse().bindTouch().play();
        })();

    }
    render() {

        return (

            <div id="landingPage">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-4"></div>
                        <div class="col-4"><h3 id="landingText">Hello, I'm <span id="landingMyName">Stivan Kitchoukov</span>.<br></br> I'm a Software Engineer.</h3></div>
                        <div class="col-4"></div>
                    </div>
                </div>

                <div id="pt" ></div>
            </div>
        );
    }
}

export default Landing;