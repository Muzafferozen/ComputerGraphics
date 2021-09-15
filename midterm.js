var canvas;
var gl;
var vPosition;
var program;

var color, colorLoc;
var red = 1.0;
var green = 0.0;
var blue = 0.0;
var x = 0.0;
var y = 0.0;
var xLoc;
var yLoc;

var scale_x = 1.0;
var scale_y= 1.0;
var scale_xLoc;
var scale_yLoc;

var letter1vertices, letter2vertices, letter3vertices, letter4vertices, letter5vertices, letter6vertices, letter7vertices, letter8vertices,
letter9vertices,letter10vertices,lette11vertices,letter12vertices,letter13vertices,letter14vertices,letter15vertices,letter16vertices,letter17vertices,letter18vertices,letter19vertices;
var buffer1, buffer2, buffer3, buffer4, buffer5, buffer6, buffer7, buffer8, buffer9, buffer10, buffer11, buffer12, buffer13, buffer14, buffer15, buffer16, buffer17, buffer18, buffer19;


// TODO: define any global variables you need


window.onload = function init()
{
	canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    //  Configure WebGL
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    //  Load shaders and initialize attribute buffers
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    // Create geometry data
		//M
letter1vertices = [vec2(-0.92, -0.45),
                    vec2(-0.92, 0.45),
                    vec2(-0.85, -0.45),
									  vec2(-0.85, 0.35)];

letter2vertices = [vec2(-0.85, 0.35),
                    vec2(-0.92, 0.45),
                    vec2(-0.8, 0.45)];

letter3vertices = [vec2(-0.8, 0.45),
								 		 vec2(-0.85, 0.35),
								 		 vec2(-0.5, -0.35),
										 vec2(-0.55, -0.45) ];

letter4vertices = [vec2(-0.08, -0.45),
							 			vec2(-0.08, 0.45),
							 			vec2(-0.15, -0.45),
							 		  vec2(-0.15, 0.45) ];

letter5vertices = [vec2(-0.15, 0.35),
							 			vec2(-0.08, 0.45),
						        vec2(-0.2, 0.45)  ];

letter6vertices = [vec2(-0.2, 0.45),
	 								vec2(-0.15, 0.35),
	 						  	vec2(-0.5, -0.35),
	 							  vec2(-0.45, -0.45) ];

letter7vertices = [vec2(-0.55, -0.45),
						       vec2(-0.5, -0.35),
					         vec2(-0.45, -0.45)  ];
	//O

letter8vertices = [vec2(0.1, 0.4),
                   vec2(0.1, -0.4),
                   vec2(0.15, 0.4),
                   vec2(0.15, -0.4)];

letter9vertices = [vec2(0.95, 0.4),
                    vec2(0.95, -0.4),
                    vec2(0.9, 0.4),
                    vec2(0.9, -0.4)];

letter10vertices = [vec2(0.1, 0.4),
								   vec2(0.15, 0.45),
							     vec2(0.15, 0.4)  ];


 letter11vertices = [vec2(0.95, 0.4),
									  vec2(0.9, 0.45),
									  vec2(0.9, 0.4)  ];

letter12vertices = [vec2(0.15, 0.45),
                    vec2(0.15, 0.4),
                    vec2(0.9, 0.45),
                    vec2(0.9, 0.4)];

letter13vertices = [vec2(0.1, -0.4),
									 vec2(0.15, -0.4),
									 vec2(0.15, -0.45)  ];


letter14vertices = [vec2(0.95, -0.4),
									 vec2(0.9, -0.4),
									 vec2(0.9, -0.45)  ];

letter15vertices = [vec2(0.15, -0.45),
									 vec2(0.15, -0.4),
								   vec2(0.9, -0.45),
								   vec2(0.9, -0.4)   ];

letter16vertices = [vec2(0.15, 0.4),
									 vec2(0.2, 0.4),
									 vec2(0.15, 0.35)  ];

letter17vertices = [vec2(0.9, 0.4),
								   vec2(0.9, 0.35),
								   vec2(0.85, 0.4)  ];

 letter18vertices = [vec2(0.9, -0.4),
 									  vec2(0.9, -0.35),
 									  vec2(0.85, -0.4)  ];

letter19vertices = [vec2(0.15, -0.35),
									 vec2(0.15, -0.4),
									 vec2(0.2, -0.4)  ];








    // TODO: create vertex coordinates for your initial letters instead of these vertices

    // Load the data into the GPU
	buffer1 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer1 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter1vertices), gl.STATIC_DRAW );

	buffer2 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer2 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter2vertices), gl.STATIC_DRAW );

	buffer3 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer3 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter3vertices), gl.STATIC_DRAW );

	buffer4 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer4 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter4vertices), gl.STATIC_DRAW );

	buffer5 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer5 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter5vertices), gl.STATIC_DRAW );

	buffer6 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer6 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter6vertices), gl.STATIC_DRAW );

	buffer7 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer7 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter7vertices), gl.STATIC_DRAW );

	buffer8 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer8 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter8vertices), gl.STATIC_DRAW );

	buffer9 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer9 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter9vertices), gl.STATIC_DRAW );

	buffer10 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer10 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter10vertices), gl.STATIC_DRAW );

	buffer11 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer11 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter11vertices), gl.STATIC_DRAW );

	buffer12 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer12 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter12vertices), gl.STATIC_DRAW );

	buffer13 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer13 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter13vertices), gl.STATIC_DRAW );


	buffer14 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer14 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter14vertices), gl.STATIC_DRAW );

	buffer15 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer15 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter15vertices), gl.STATIC_DRAW );


	buffer16 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer16 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter16vertices), gl.STATIC_DRAW );

	buffer17 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer17 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter17vertices), gl.STATIC_DRAW );


	buffer18 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer18 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter18vertices), gl.STATIC_DRAW );


	buffer19 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer19 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(letter19vertices), gl.STATIC_DRAW );



	xLoc = gl.getUniformLocation(program, "x");
	yLoc = gl.getUniformLocation(program, "y");

	scale_xLoc =gl.getUniformLocation(program, "scale_x");
	scale_yLoc =gl.getUniformLocation(program, "scale_y");

	colorLoc = gl.getUniformLocation(program,"color");




	document.getElementById("posX").oninput = function(event) {
        //TODO: fill here to adjust translation according to slider value
				x = event.target.value;
    };
    document.getElementById("posY").oninput = function(event) {
        //TODO: fill here to adjust translation according to slider value
				y = event.target.value;
    };
    document.getElementById("scaleX").oninput = function(event) {
        //TODO: fill here to adjust scale according to slider value
				scale_x = event.target.value;
    };
    document.getElementById("scaleY").oninput = function(event) {
        //TODO: fill here to adjust scale according to slider value
				scale_y = event.target.value;
    };
    document.getElementById("redSlider").oninput = function(event) {
        //TODO: fill here to adjust color according to slider value
				red = event.target.value;
    };
    document.getElementById("greenSlider").oninput = function(event) {
        //TODO: fill here to adjust color according to slider value
				green = event.target.value;
    };
    document.getElementById("blueSlider").oninput = function(event) {
        //TODO: fill here to adjust color according to slider value
				blue = event.target.value;
    };

    render();

};

function render() {
	gl.clear( gl.COLOR_BUFFER_BIT );

	// TODO: Send necessary uniform variables to shader and
	// perform draw calls for drawing letters

	// bind vertex buffer and associate position data with shader variables
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer1 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw triangle
	color = vec4(red, green, blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter1vertices.length);

	// bind vertex buffer and associate position data with shader variables
	gl.bindBuffer( gl.ARRAY_BUFFER, buffer2 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(red, green, blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter2vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer3 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(red, green, blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter3vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer4 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(red, green, blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter3vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer5 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(red, green, blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter5vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer6 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(red, green, blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter6vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer7 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(red, green, blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter7vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer8 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(1-red, 1-green, 1-blue, 1.0);
  gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter8vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer9 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(1-red, 1-green, 1-blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter9vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer10 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(1-red, 1-green, 1-blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter10vertices.length);


	gl.bindBuffer( gl.ARRAY_BUFFER, buffer11 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(1-red, 1-green, 1-blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter11vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer12 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(1-red, 1-green, 1-blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter12vertices.length);


	gl.bindBuffer( gl.ARRAY_BUFFER, buffer13 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(1-red, 1-green, 1-blue, 1.0);
  gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter13vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer14 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(1-red, 1-green, 1-blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter14vertices.length);


	gl.bindBuffer( gl.ARRAY_BUFFER, buffer15 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(1-red, 1-green, 1-blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter15vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer16 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(1-red, 1-green, 1-blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter16vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer17 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(1-red, 1-green, 1-blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter17vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer18 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(1-red, 1-green, 1-blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter18vertices.length);

	gl.bindBuffer( gl.ARRAY_BUFFER, buffer19 );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// draw rectangle
	color = vec4(1-red, 1-green, 1-blue, 1.0);
	gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter19vertices.length);

	gl.uniform1f(xLoc, x);
	gl.uniform1f(yLoc, y);

	gl.uniform1f(scale_xLoc, scale_x);
	gl.uniform1f(scale_yLoc, scale_y);





    window.requestAnimFrame(render);
}
