(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.StartInstructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKpBFIABhFIglhDIAoAFIAUAqIAQguIApgBIgnBEIgGBEgAIdBFIAAiHIBcAAIAAAZIg4ADIAAAXIAzAEIAAAZIgwAAIAAARIA5AFIAAAhgAHPAeIgNATIAAAUIgnAAIAAiIIApAFIgCA2IAhg4IAmgEIgnBEIAvBDIgoACgADEBFIABhFIglhDIApAFIATAqIARguIAogBIgmBEIgHBEgABAgBIADBGIgkAAIAAiIIAoAFIAoBYIgEhcIApgBIABCGIg2ACgAgUBFIgGgrIgeAAIgFArIgiAAIAbiHIAzAAIAoCHgAg2AAIAbAAIgPgxgAkrBFQgSgBgJgFQgKgHABgOIAAgNIAagDIABACIACAHQADADAEADQAFADAGABIAGAAIAJgBQADgBACgCQACgCAAgGIAAgHQAAgEgFgDQgFgCgIgBIgQgFQgKgCgHgDQgJgEgFgFQgEgGAAgJIAAgOQAAgHAEgHQAEgGAHgEQAHgFAGgCQAIgDAGAAIAYAAQAKAAAHAEQAHAEAEAFQAEAFACAGQACAFAAAEIAAAQIgeAAIAAgLQAAgEgDgEQgDgDgDgCIgIgBIgEAAQgLABgEAEQgFAEAAAJQAAAFAFACIANAFIARAEIARAGQAIADAGAHQAEAGAAAKIAAALQAAAGgDAIQgEAJgGAFQgHAFgIABgAmeBFQgSgBgKgFQgJgHAAgOIAAgNIAagDIABACIADAHQACADAFADQAFADAGABIAFAAIAJgBQAEgBACgCQACgCAAgGIAAgHQAAgEgFgDQgFgCgIgBIgRgFQgJgCgIgDQgHgEgFgFQgGgGAAgJIAAgOQABgHAEgHQAEgGAHgEQAGgFAHgCQAIgDAGAAIAZAAQAJAAAHAEQAGAEAFAFQAEAFACAGQACAFAAAEIAAAQIgfAAIAAgLQAAgEgCgEQgDgDgEgCIgHgBIgEAAQgLABgFAEQgEAEAAAJQAAAFAFACIANAFIARAEIARAGQAIADAGAHQAEAGAAAKIAAALQAAAGgEAIQgDAJgGAFQgHAFgIABgAoqBFIAAiHIBcAAIAAAZIg4ADIAAAXIAzAEIAAAZIgxAAIAAARIA5AFIAAAhgApXBFIAAgqQgBgEgDgDQgDgCgEgBIgHgCIgDgBIAAA3IglAAIAAiHIA3AAQAOAAAHACQAIACAEAFQADAEABAGIABANQAAAPgCAJQgCAJgIADQgGAFgOAAIADABIAIADIAKAFIAHAFQAEAEAAACIAAAqgApugSIASAAQAFAAADgBQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAgFQAAgFgCgEQgCgFgHAAIgSAAgAr5BFIAAiHIA5AAQAMAAAIAEQAHADAEAGQAEAFABAHIABAPQAAAPgBAJQgDAIgGAEQgIAEgOAAIgYABIAAA2gArUgOIARABQAGAAACgCQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAIABgGIgBgJQgBgEgDgDQgCgDgFAAIgRAAg");
	this.shape.setTransform(-47.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AkGBhIglAAQgXAAgNgIIAAAAQgGgEgEgGQgDAFgFAEIAAAAQgKAIgNABIgBAAIglAAQgUAAgMgGIgCACQgEAEgHAAIhfAAIgFgBIgFABIgkAAQgGAAgEgEQgEAEgGAAIglAAQgGAAgFgEQgEgFAAgGIAAhHIgCABIgDABQgIACgNABIgKAAIAABCQAAAGgFAFQgEAEgGAAIgmAAQgGAAgFgEQgEgFAAgGIAAihQAAgHAEgEQAFgEAGAAIA4AAQARAAAKAFIAHAEIADgFQAFgEAGAAIA3AAQAQAAAJACIABAAIAJAFIACgDQAFgEAGAAIBbAAQAHAAAEAEQAEAEAAAGIAEgCIAAAAQAJgGAIgDQAKgEAJABIAYAAQAOAAAKAFIAAABQAJAEAGAIIABABIADAEQAFgGAHgFIAAAAQAJgGAIgDQAKgEAJABIAYAAQAOAAAKAFIAAABQAJAEAGAIIABABQAFAHADAHQADAJAAAGIAAAQIgBAEIABAHIAAAQIgBAFIAAAJIAAAKIAAABIAAADIAAABIAAADIAAAJIAAAKQABAKgGAMIAAgBQgFAMgJAHIAAAAQgKAIgNABIgBAAIAAAAgAHiBfQgEgBgCgDIgLgQIAAAHQAAAGgFAFQgEAEgGAAIgnAAQgGAAgEgEQgEgFgBgGIAAiiQAAgFADgDQACgEAEgCQAEgCAEABIApAFQAGAAADAFIABAAIAAABIABACIABACIADgFQACgDADgCIAFgCIApgEQAFAAAFADIACACQAEgDAFAAIBcAAIAFABQAEgCAFAAIAoAFQAEAAADADQADACACADIAEAJIAEgMQACgEAEgDQAEgCAEAAIApgBQAFAAAEAEQAFADABAFIAAAAQABAFgDAFIgEAIIAAABQAFADABAFQABAGgDAFIglBBIgGA/QgBAGgEAEQgEAEgGAAIgkAAQgEAAgEgCQgDgCgCgEQgCgDAAgEIAAgXIAAgEIAAgmIgUglIgCADIgBAAIAAASIAAABIAAAGIAFAEQAEAEAAAGIAAAbIAAABIAAAgQAAAGgFAFQgEAEgGAAIhgAAQgDAAgEgCIgEABIgpABIAAAAQgEAAgDgCgAC9BfQgEgCgCgEQgCgDAAgEIABgXIgBgEIABgmIgTghIABBGIAAADIAAAYQAAAGgEAFQgFAEgGAAIg2ABQgEAAgEgCQgEgDgCgEIAAgBIgBACQgCAEgEACQgDACgFAAIgkAAIgEAAIgEAAIgrAAQgFAAgFgEQgEgEgBgFIgDgeIgEAAIgDAeQAAAFgFAEQgEAEgGAAIgjAAQgEAAgEgCQgEgDgCgEQgBgFABgEIADgOIgDgEQgBgFABgEIAbiGQABgGAEgDQAFgEAFABIAzAAQAFAAAEADQAFACABAFIARA/IAAg7QAAgEADgEQACgEAEgBQAEgCAEAAIApAFQAEAAADADQADACACADIAIASIgBgRIACgGQACgDADgCQAEgDAEABIAogBQAEAAADACQAEgCAEAAIApAFQAEAAADADQADACACADIAEAJIAEgMQACgEADgDQAEgCAFAAIAogBQAGAAAEAEQAEADABAFIAAAAQABAFgCAFIgFAIIABABQAEADABAFQABAGgDAFIglBBIgGA/QAAAGgFAEQgEAEgGAAIgkAAIAAAAQgEAAgDgCg");
	this.shape_1.setTransform(-47.4,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.StartInstructions, new cjs.Rectangle(-125.1,-6.1,155.4,19.4), null);


(lib.screenflash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bfQMAAAg9qQAAg1AZAAMAuFAAAQAZAAAAA1MAAAA9qg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.screenflash, new cjs.Rectangle(-150,-200,300,400), null);


(lib.GetReady = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtXCHIgGgPQgKAGgLAEQgKADgJAAIgBAAIAAAAIgpgCQgXgCgSgMQgTgLgMgUQgKgTgBgXIAAhHQABgfAIgVQAIgVANgNQANgNAPgFQAPgFAPAAIAkAAQAUAAASALQATAMAMASQAMATAAAVIAAAZIgzACQAAgNgDgMQgEgMgIgHQgHgIgMAAIgDAAIgDABIgcAFQgMACgGAQQgGAQAAAgIAAAWQAAAOAFAPQAEAPAIAKQAHAKALAAIAYAAQADAAAGgDQAFgCADgFQADgEABgFIAAgCIgBgBIgfgDIgEggIBhAAIgBB2gANhCFIACiJIhKiGIBRAJIAmBTIAhhbIBRgBIhNCKIgMCFgAI2CFIAAkNIB3AAQAsABAVASQATATAAAhIAACQQAAANgCAKQgCAKgGAHQgIAHgOAEQgOADgYAAgAKDBcIAaAAQATAAAJgDQAIgDACgGQACgHAAgJIABghIACgqQACgXAAgZQAAgOgEgGQgDgHgGgBQgFgCgGAAIgxAAgAHPCFIgKhWIg9AAIgJBWIhHAAIA4kOIBnAAIBPEOgAGMgCIA1gDIgdhigABqCFIgBkOIC3AAIAAAyIhvAGIAAAvIBmAIIAAAyIhhAAIAAAkIByAIIAABBgAAPCFIAAhRQAAgJgHgGQgGgFgHgDIgPgEIgGgBIAABtIhKAAIAAkOIBuAAQAaAAAPAFQAPAEAIAJQAHAIADAMQACAMAAAPQAAAdgFASQgEATgOAHQgOAJgbAAIAGACIAQAHIATAJQAJAGAHAGQAGAFABAGIAABSgAgcgpIAiAAQALAAAEgCQAFgDABgEQACgEgBgGQAAgLgDgJQgFgJgOAAIgiAAgAoPCFIAKi2IhIgCIgFhWIDfACIABBPIhMAMIAACxgAshCFIAAkOIC3AAIAAAyIhwAGIAAAvIBmAIIAAAyIhgAAIAAAkIByAIIAABBg");
	this.shape.setTransform(-1.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("As7C7IgfgEQgIgBgHgFIgBAAQgOAEgNAAIgBAAIgBAAIgBAAIgpgCIAAAAQgfgCgYgQIgBAAQgYgQgPgZIgBgBQgOgZgBgfIAAgBIAAgjIAAgBIAAhHQABglAKgaIAAAAQAKgcASgQIAAgBQASgRAVgHIAAAAQAVgHATAAIAjAAIABAAQAcAAAaAQIAAAAQAJAFAIAHQAAgMAJgIQAJgJAMAAIC3AAQAHAAAFACQAGgCAGAAIDfACQANAAAIAJQAJAJAAAMIABBPIgBAGIABAeQAAALgHAJQgHAIgLACIg0AIIAACXQAAANgIAJQgJAIgNAAIhQAAQgIAAgIgEQgHgEgEgIQgDgHAAgIIABgaQgBgFAAgFIAGh0IgngBIgIgBIAAAbQAGACAEAFQAIAIAAAMIAABlQAAANgJAJQgJAIgMAAIi/AAIgFAAIgFADQgGADgHAAIgDAAgAImC1IhXAAQgLAAgJgHQgJgIgBgLIgHg8IgHAAIgGA7QgBAMgJAIQgJAHgLAAIhHAAIgHgBIgJABIi+AAQgGAAgEgBQgFABgGAAIhHAAQgMAAgHgIQgJAIgMAAIhKAAQgMAAgJgIQgJgJAAgNIAAkyQAAgNAJgIQAJgJAMAAIBuAAQAfAAATAGIABAAQAKAEAJAEIAEgFQAJgJAMAAIC3AAQANAAAJAJQAIAIAAANIAAAxIAAADIAAAiQAAAMgIAJIgBABIAAADIAAAbIAdiQQADgLAIgGQAIgHALAAIBnAAQAKAAAIAGQAIAGADAKIAkB8IAAhzQAAgMAJgJQAJgJAMAAIB3AAQA0ABAbAVIAAAAQACgMAJgGQAKgHALACIBRAIQAIABAGAFQAHAEADAIIAIARIAIgYQAEgJAHgFQAIgFAJAAIBRgBQALAAAIAHQAJAHACALQACAKgFAKIgCAEQAEAFABAHQACAKgFAKIhLCDIgLCAQgBAMgJAHQgIAIgMAAIhIAAQgIAAgHgEQgHgEgEgHQgEgHAAgIIABggIgBgEIABhfIglhDIAAAAIgBBsIAAABIAAAIIAAAEIAAAWIAAABQABARgDAMQgDATgNANIAAABQgMAMgXAGQgRAEgdAAIiFAAIgIgBIgIABIAAAAg");
	this.shape_1.setTransform(-1.1,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GetReady, new cjs.Rectangle(-106.7,-6.4,211.3,37.4), null);


(lib.GameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtsCIIgGgPQgKAGgLADQgKAEgJAAIgBAAIgBAAIgogDQgXgBgTgMQgSgMgMgTQgKgTgBgXIAAhHQABgfAIgVQAIgWANgMQANgNAPgFQAPgGAPAAIAjAAQAVABASALQATAMAMASQAMASAAAWIAAAZIgzABQAAgNgEgLQgEgMgHgIQgIgHgLAAIgDAAIgEABIgbAFQgMACgGAQQgGAPAAAhIAAAVQAAAPAEAPQAFAOAHAKQAIALAKgBIAZAAQADABAFgDQAFgDAEgEQADgFABgEIgBgCIAAgBIgfgDIgFggIBhAAIAAB1gAo5CGIAAkPIBOAAIBBCeIAwieIBTADIAGEMIhPAAIAAh/IghB/IhBAAIgZh1IgGB6gAPRCGIAAhSQAAgIgGgGQgHgFgIgDIgOgFIgHAAIAABtIhJAAIAAkPIBuAAQAaAAAQAGQAPAEAHAIQAIAJACAMQACAMAAAOQAAAegEASQgFATgOAHQgNAJgcAAIAHACIAPAHIATAJQAKAGAGAFQAGAGABAGIAABSgAOlgoIAjAAQALAAAEgCQAFgDABgEQACgEgBgGQABgLgEgJQgFgJgOAAIgjAAgAKPCGIAAkPIC3AAIAAAzIhwAGIAAAvIBmAIIAAAyIhhAAIAAAjIBzAIIAABCgAIwCGIgTgBIgYgBIgUAAIgKgBIhOkMIBQAIIArDPIAfjXIBQgCIhLERIgIAAgAE1CGIgBAAIgpgDQgXgBgSgMQgTgLgLgUQgLgSAAgYIAAhGQAAggAIgVQAIgWANgMQANgMAPgGQAQgGAPAAIAjAAQAUABATAMQASAKAMATQAMASABAWIAABjQgBAVgHARQgIAQgMAMQgMALgNAGQgOAGgNAAIgBAAgAEihLIgUACQgMABgFAQQgGAQgBAhIAAAWQAAAOAFAOQAEANAIAKQAIAIAKABIAQAAQAMgBAHgHQAIgIADgKQAEgLAAgHIgBgoQAAgagGgOQgGgPgJgFQgJgGgJAAIgBAAgAkLCGIAAkPIC3AAIAAAzIhwAGIAAAvIBmAIIAAAyIhhAAIAAAjIBzAIIAABCgAqgCGIgKhWIg9AAIgJBWIhGAAIA3kPIBnAAIBPEPgArigCIA0gCIgdhig");
	this.shape.setTransform(-1.2,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AtQC9IgfgDQgJgBgGgFIgBAAQgOAEgNAAIgBAAIgBAAIgBAAIgpgCIAAAAQgfgDgZgPIAAgBQgYgPgQgaIAAAAQgOgagBgeIAAgBIAAgnIAAgBIAAghIAAgBIAAglQABglAKgaIAAAAQAKgcARgRIABAAQASgSAVgGIAAAAQAUgIAUABIAjAAIABAAQAcAAAZAPIABABQAYAOAQAYIAAABQAOAWADAYIAQhOQACgLAIgHQAJgGAKAAIBnAAQAKAAAIAGQAIAGADAJIAkB9IAAh0QAAgNAJgJQAJgIAMAAIBOAAQAJgBAIAGQAIAFADAIIAhBRIAXhOQAEgKAIgGQAIgGAKABIBTACQAFAAAFACQAHgEAKAAIC3AAQAMAAAJAIQAJAJAAANIAAAwIAAAEIAAAmQAAAMgJAJIgBABIAAAlIAAAEIAAAYQAFADAFAEQAIAJAAAMIAAAoIAAACIAAA/QAAAMgJAJQgJAJgMAAIi/AAQgGAAgFgCQgFACgGAAIhPAAQgJAAgHgFQgIAFgJAAIhBAAQgGAAgFgCIgHAEQgHAEgIgBIhIgFIgGgBIgIABIhXAAQgLAAgJgIQgIgHgCgLIgHg8IgHAAIgGA7QgBALgJAIQgIAIgMAAIhGAAIgFAAIgFADQgGACgHAAIgDAAgAIuC4IgRgBIgCAAIgXAAIgTgBIgCAAIgIAAQgKAAgIgGQgIgHgDgJIgmiFIAAAmIAAABQgBAbgKAWQgKAWgQAPQgQAQgSAIIgBAAQgUAIgSAAIgBAAIgBAAIgCAAIgogCIgBAAQgegDgZgPIgBgBQgYgPgPgZIgBgBQgNgZgBgfIAAgBIAAgnIAAgBIAAhHQAAglAKgaIAAAAQALgcARgQQASgSAVgHIAAAAQAVgIAUABIAjAAIABAAQAcABAZAPQAJAFAIAHQAAgFACgGQAEgJAJgGQAIgFAKABIBQAJQAKABAHAGQAIAHACAKIAHAmIAHgtQACgLAIgHQAIgHALAAIBQgCQAGgBAFADIACAAIC3AAQAGAAAGACQAFgCAHAAIBuAAQAfAAATAGIABAAQAYAHAMAPQANAOADAVQADAOAAASIgBAaIAAAAIAAABIABAMIAAABQAAAigFATIgCAHQAHAKAAALIAAACIAAAmIAAAFIAABPQAAAMgJAJQgJAJgMAAIhHAAQgMAAgJgIQgJAIgMAAIhJAAIgIgBIgIABIi/AAQgMAAgJgJQgJgJAAgMIAAheIgcBmQgCAKgJAGQgIAGgKAAIgIAAIgBAAIgBAAg");
	this.shape_1.setTransform(-1.2,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GameOver, new cjs.Rectangle(-108.9,-6.6,215.6,37.9), null);


(lib.LowerPipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,153,255,0.22)").ss(5,1,1).p("Agku7IAAB6AAlq7IAAZ3");
	this.shape.setTransform(9.5,103.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,102,0.4)").s().p("AkrAUIAAgUQAAgHAHgGQAIgGAKAAIIkAAQAMAAAGAGQAIAGAAAHIAAAUg");
	this.shape_1.setTransform(29.2,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// pipe top
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000097","#388597"],[0,1],-30,0,30,0).s().p("AkNCHQgeAAAAgeIAAjRQAAgeAeAAIIbAAQAeAAAAAeIAADRQAAAegeAAg");
	this.shape_2.setTransform(29.2,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,102,0.4)").s().p("AjvgMIAAgqIHfAAIAABtg");
	this.shape_3.setTransform(29.2,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// pipe bottom
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000097","#388597"],[0,1],-24,0,24,0).s().p("AjvN/IAA79IHfAAIAAb9g");
	this.shape_4.setTransform(29.2,115.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.LowerPipe, new cjs.Rectangle(-9,-8,77.3,220), null);


(lib.GroundSlice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grass
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC66").s().p("AvEAbIAAhPIeJAAIAABPQgcApgYgpIgTAKIgQgKQgQAVgVgVQgbAfgcgfQgdAcgdgcIgUAAQgcAogfgoQgWATgVgTQgYAogogoQghAngdgfIgGgIQgPATgPgTIgcAPIgXgPQgrAjgpgjQgaAlgcglQgVAfgVgfQgxAlgwglQgMAXgMgXQgRAYgSgYQgfAxgfgxQgRAsgdgsIgaAAQgUATgUgTQgaAggfggQgYAUgZgUQgMATgNgTQgfAtgggtQgXAUgXgUQgcAfgcgfQgvAihBgiQgVAqgVgqQgpAqgogqQgdAlgdglQgUAbgUgbQgvAkgygkQgDAHgEACQgJAGgIgPQgRAYgRgYQgTAZgQAAQgQAAgMgZg");
	this.shape.setTransform(96.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// grass shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009966").s().p("AvEAcIAAhPIeJAAIAABPQgcApgYgpIgTAKIgQgKQgQAUgVgUQgbAegcgeQgdAbgdgbIgUAAQgcAogfgoQgWASgVgSQgYAngognQghAmgdgfIgGgHQgPASgPgSIgcAOIgXgOQgrAigpgiQgaAkgcgkQgVAegVgeQgxAjgwgjQgMAWgMgWQgRAXgSgXQgfAwgfgwQgRArgdgrIgaAAQgUASgUgSQgaAfgfgfQgYATgZgTQgMARgNgRQgfAsgggsQgXASgXgSQgcAegcgeQgvAghBggQgVAqgVgqQgpApgogpQgdAkgdgkQgUAagUgaQgvAigygiQgDAGgEADQgJAGgIgPQgRAXgRgXQgTAYgQAAQgQAAgMgYg");
	this.shape_1.setTransform(96.5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// top grass
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33FF66").s().p("AvEAKIAAgTIAHAAIAAABIeCAAIAAASg");
	this.shape_2.setTransform(96.5,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#339966").s().p("Au9AKIAAgBIgHAAIAAgSIeJAAIAAATg");
	this.shape_3.setTransform(96.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// dirt shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663333").s().p("AvEAcIAAhPIeJAAIAABPQgcApgYgpIgTAKIgQgKQgQAUgVgUQgbAegcgeQgdAbgdgbIgUAAQgcAogfgoQgWASgVgSQgYAngognQghAmgdgeIgGgIQgPASgPgSIgcAOIgXgOQgrAigpgiQgaAkgcgkQgVAegVgeQgxAjgwgjQgMAWgMgWQgRAXgSgXQgfAwgfgwQgRArgdgrIgaAAQgUASgUgSQgaAfgfgfQgYATgZgTQgMARgNgRQgfAsgggsQgXASgXgSQgcAdgcgdQgvAghBggQgVAqgVgqQgpApgogpQgdAkgdgkQgUAagUgaQgvAigygiQgDAGgEADQgJAFgIgOQgRAXgRgXQgTAYgQAAQgQAAgMgYg");
	this.shape_4.setTransform(96.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// dirt
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996666").s().p("AvED9IAAn5IeJAAIAAH5g");
	this.shape_5.setTransform(96.5,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.GroundSlice, new cjs.Rectangle(-8,-8,208,65.8), null);


(lib.collisionpoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AgXAYQgLgKAAgOQAAgOALgJQAKgLANAAQAOAAALALQAKAJAAAOQAAAOgKAKQgLALgOAAQgNAAgKgLg");
	this.shape.setTransform(3.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.collisionpoint, new cjs.Rectangle(0,0,7,7), null);


(lib.Trees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1CD241").s().p("AiPEwIgJgIQgqATgxAAQhaAAhAg+QgvAqhAAAQg6AAgrgiQgyAig/AAQhIAAg2grQgcAIgfAAQgpAAgkgOQgnAXgxAAQhIAAg0gzQgWgWgNgaIgLAAIgFAAQgUApgiAjQhPBPhwAAQhwAAhPhPQgPgQgNgQIAApOQAcgIAgAAQBaAABBBBQAwAwAMA/QBBANA0AsQAjgSAqAAQBGAAAyAxQATAUAMAXQAJgCAKAAIAKABIAKgLQA8g8BVAAQBIAAA2ArQAbgIAgAAQBVAAA7A8IAQASQAZgIAdAAQAkAAAgANIAMgIQALgPAOgOQBDhCBdAAQBCAAA0AiQBLhABkAAQByAABRBQIADAEQA4goBHAAQBYAABAA9QAfgOAlAAQBGAAAyAxQAOAOALAQQARguAmgnQBGhGBkAAQBjAABGBGQAZAaARAdQAJgQAOgOQAygyBGAAQBGAAAyAyQATATAMAXIAFgCIgBgPQAAhhBFhFQBFhEBhAAIADAAIAAHTIgDAAIgcgBQgMAlgeAdQgyAzhGAAQhGAAgzgzQgTgTgLgWQgXAGgaAAQhGAAgygyIgJgKQgSAvgmAmQhGBGhjAAQhkAAhGhGQgkgkgRgrQgLATgQAQQgyAxhGAAQgiAAgcgLIgCACQhBBBhbAAQhAAAgzggIgPAQQhRBRhyAAQhxAAhQhRg");
	this.shape.setTransform(162.1,352.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Middle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5BE7AB").s().p("AN8EcQgXgXgOgaIgLAMQgqAqg6AAQg8AAgqgqQgcgcgKgkQggAhgvAAQgvAAghgiQgIgIgFgIQgNAUgSASQg2A3hOAAQhNAAg4g3QgbgcgNgiQgTAIgWAAQgpAAgdgdQgIgJgGgJQgLAtgiAkQgxAwhEAAQguAAgngXQgKAcgWAWQgsArg9AAQg9AAgrgrQgcgcgJghIgUAAQhMAAg1g1IgHgHIgIAIQgrArg8AAQgpAAgggTQgKAOgMALQg2A3hOAAQhOAAg2g3QgmgmgMgwQgaAIgeAAQhGAAgxgyQgygxAAhGIAAgCQgTAKgWAAQgkAAgagaQgRgSgGgWQgfAWgpAAQgfAAgagNIAAjiQAagNAfAAQA1AAAkAkQAmAlgBA1IAAAAQAPgFAQAAQAkAAAZAaQAOAOAHARIAJgKQAxgyBGAAQBHAAAxAyQAeAdAMAkQAjgQApAAQBNAAA2A1QAogjA4AAQAyAAAmAdQALgUATgRQA1g2BMAAQBLAAA2A2QA0AzACBGQAWADAUAJQALgmAegfQAxgwBEAAQBEAAAxAwQAaAbAMAgQAIgQANgOQAdgdApAAQAhAAAZASQALgPAMgOQA4g2BNAAQBOAAA2A2QAjAjANAsQAggdAsAAQAvAAAhAgQARARAIATQAFgHAHgHQAqgpA8AAQA6AAAqApIALANQAOgbAXgXQA5g4BRAAQBPAAA3A1QAZgJAcAAQATAAASAFQANguAjgjQA3g3BNAAQAnAAAgAOQAGgrAegeQAlglA0AAQAvAAAiAdIAADCQgiAcgvAAIgLAAQADAPgBAQQABBOg3A2Qg3A3hOAAQg/AAgwgkIgOAQQglAmg3AAQgMAAgKgCQgMAQgPAPQg5A5hRAAQhRAAg5g5g");
	this.shape_1.setTransform(162,341.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Back
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6FFFC").s().p("AK0E0QgQgQgKgRQgoAng5AAQg6gBgpgpQgIgHgGgJQgVAFgWAAQhDAAgwgvQgbgcgLgiIgRABQg1AAgngiQgEAlgbAaQgeAfgrAAQgYAAgTgIIgDACQgRATgbAAQgbAAgTgTIgJgLQgjARgpAAQhHAAg0gzIAAgBIgEAEQgsAshAAAQg/AAgtgsQgYgZgLgeQgKAZgWAVQgmAog5AAQgsAAgjgaIgGAGQgtAvhBAAQhBAAgvgvQgMgMgIgNIgUABQg1AAglglQgkglAAg0IAAgMQgdAVgkgBQgmABgdgWQgbAbglAAQgKgBgJgCQgHAJgIAHQgqArg7AAQg8AAgpgrQgrgpAAg7IABgRQgvgBglgcIAAjkQAlgeAzgBQA7ABAqAqQAqAqABA7IgBASQA4ABApApIAJAJQAMgDANAAQASAAAQAGQAHgLAKgKQAhghAvAAQAuAAAhAhQAiAhgBAvIAAAFQAigbAtAAQAsAAAhAbQAfgRAkgBIAAgJQAAg/AsgtQAtgsA/AAQA/AAAtAsQAiAkAIAuIALAAQAoAAAbAcQAKAKAIANQAhgVAqABQA2gBApAhQAHgLAKgKQA0gyBHgBQBIABAzAyQArArAHA4QAVgLAbAAQAdAAAXANIAAgJQAAg6AqgqQArgqA7gBQA7ABAqAqQARARAKATQAUgEAWgBQBCAAAvAwQAXAUAKAaIABAAQAJgmAfgeQArgrA9AAQA9AAAsArQASATALAVQAUgJAYAAQAqAAAdAcQAFgrAhghQAngoA5ABQAuAAAjAaIACgDQApgpA6AAQAvAAAjAbQAHgMALgLQAfgeAogDQgBgLAAgMQAAgvAggiQAiggAvAAQAuAAAiAgQAdAdAEAnQATAIARARIAKAMIAAChIgKALQgmAmg2AAQgnAAgegTIgFAGQgjAjgwAAQgdAAgYgNQgKAagVAVQgkAjgvAFQgGAhgaAZQghAhguAAQgvAAghghQgWgWgIgcQgqgHgfggIgNgOQgGAWgTATIgEADQADAPAAAQQAABAgsAsQgtAsg/AAQg/AAgtgsg");
	this.shape_2.setTransform(162,332.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Trees, new cjs.Rectangle(-9.1,297,342.5,94.1), null);


(lib.Clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECF8FF").s().p("A6cIRIgKiKIAAtrQAUgFAXAAQBBAAAuAtQAkAkAJAvQBrAIBOBNQBNBNAJBoQAJgNAMgLQA3g3BPAAQAbAAAYAHIAAgOQAAhUA8g7QA8g7BVAAQBUAAA8A7QApAoAOAzQAygeA/AAQA1AAAsAUIACgCQArgqA7AAQA7AAAqAqQAqApAAA7IAAACQANgUARgRQBDhBBcAAQBdAABCBBQAiAiARApQALgUASgSQAzgxBHAAQAYAAAWAFIgBgVQgBhmBKhIQBIhIBnAAQBnAABJBIQA8A7ALBPQAlAHAeAXIAAgLQAAhCAvgvQAwgvBCAAQBDAAAwAvQARARALAUQADhcBDhCQBFhFBhAAQBiAABGBFIADADIAAPZg");
	this.shape.setTransform(-0.4,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Back
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0EFFF").s().p("A5hIRIAAwfIANgBIAUgBQBiAABFBFQBDBCACBcQALgUASgRQAvgvBDAAQBCAAAwAvQAvAvAABCIAAALQAegXAmgHQALhPA7g7QBJhIBnAAQBnAABJBIQAtAtARA3IAOgPQBQhPBwAAQBxAABPBPQAZAZARAcQBNAHA6A5QASARAMAUIAAgCQAAg7AqgpQAqgqA7AAQA8AAAqAqIACACQAsgUA1AAQA/AAAzAeQAOgzAogoQA8g7BUAAQA1AAArAXQAKgMAMgMQBVhVB5AAQB4AABWBVIADAEQAogiA2AAQAlAAAfAQQALgZAVgVQAugtBCAAQAWAAAUAFIAANrIgKCKg");
	this.shape_1.setTransform(-8.8,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clouds, new cjs.Rectangle(-172.2,-66.3,342.2,109.4), null);


(lib.Pipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Upper Pipe
	this.instance = new lib.LowerPipe();
	this.instance.parent = this;
	this.instance.setTransform(26.7,-220.8,1,1,0,180,0,29.7,101.8);
	this.instance.cache(-11,-10,81,224);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Lower Pipe
	this.instance_1 = new lib.LowerPipe();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.7,150.8,1,1,0,0,0,29.7,101.8);
	this.instance_1.cache(-11,-10,81,224);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pipe, new cjs.Rectangle(-3.8,-324.4,60,578.8), null);


(lib.ernie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hit points
	this.hit9 = new lib.collisionpoint();
	this.hit9.name = "hit9";
	this.hit9.parent = this;
	this.hit9.setTransform(-22.4,-41.6,1,1,0,0,0,3.5,3.5);

	this.hit7 = new lib.collisionpoint();
	this.hit7.name = "hit7";
	this.hit7.parent = this;
	this.hit7.setTransform(-48,8,1,1,0,0,0,3.5,3.5);

	this.hit8 = new lib.collisionpoint();
	this.hit8.name = "hit8";
	this.hit8.parent = this;
	this.hit8.setTransform(-57.2,-22.8,1,1,0,0,0,3.5,3.5);

	this.hit6 = new lib.collisionpoint();
	this.hit6.name = "hit6";
	this.hit6.parent = this;
	this.hit6.setTransform(-22.4,54.8,1,1,0,0,0,3.5,3.5);

	this.hit5 = new lib.collisionpoint();
	this.hit5.name = "hit5";
	this.hit5.parent = this;
	this.hit5.setTransform(26.4,50.1,1,1,0,0,0,3.5,3.5);

	this.hit4 = new lib.collisionpoint();
	this.hit4.name = "hit4";
	this.hit4.parent = this;
	this.hit4.setTransform(36.1,23.8,1,1,0,0,0,3.5,3.5);

	this.hit3 = new lib.collisionpoint();
	this.hit3.name = "hit3";
	this.hit3.parent = this;
	this.hit3.setTransform(84.5,20.4,1,1,0,0,0,3.5,3.5);

	this.hit2 = new lib.collisionpoint();
	this.hit2.name = "hit2";
	this.hit2.parent = this;
	this.hit2.setTransform(74.1,-39.4,1,1,0,0,0,3.5,3.5);

	this.hit1 = new lib.collisionpoint();
	this.hit1.name = "hit1";
	this.hit1.parent = this;
	this.hit1.setTransform(23.6,-54.9,1,1,0,0,0,3.5,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit1},{t:this.hit2},{t:this.hit3},{t:this.hit4},{t:this.hit5},{t:this.hit6},{t:this.hit8},{t:this.hit7},{t:this.hit9}]}).wait(21));

	// eyeballs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiIAhQgJgKAAgOQAAgNAJgKQAKgJAOAAQAOAAAKAJQAKAKAAANQAAAOgKAKQgKAKgOAAQgOAAgKgKgABZAOQgKgJAAgNQAAgOAKgKQAKgKAOAAQAOAAAJAKQAKAKAAAOQAAANgKAJQgJAKgOAAQgOAAgKgKg");
	this.shape.setTransform(47.2,-18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AiNAiQgKgKAAgOQAAgOAKgKQAKgKAPAAQAOAAAKAKQALAKAAAOQAAAOgLAKQgKALgOgBQgPABgKgLgABcAPQgKgKAAgOQAAgOAKgKQALgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKAKQgKAKgPAAQgOAAgLgKg");
	this.shape_1.setTransform(47.2,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},11).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},6).wait(2));

	// eyes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiTBjQgSgIgOgOQgcgdAAgqQgBgbAOgXQAHgLAIgJQAegdApAAQAqAAAdAdQAJAJAGALQAOAXAAAbQABAqgeAdQgOAOgRAIQgSAHgWAAQgVAAgSgHgABLBLQgMgFgLgKIgGgEQgMgMgHgOQgJgTAAgWQAAgSAGgPIADgIQAHgOAMgMQAdgcAnABQAXgBASAKQAOAHALALQAcAcAAAnQAAAngcAcQgLALgOAHIgDABQgSAJgUAAQgUAAgTgJg");
	this.shape_2.setTransform(43.3,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(21));

	// lefttusk
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOAvIgCgBIgIgGIgCgBIgCgBIhHgkQgCgBABgGIAAgBIAAgCIABgEIADgHQAIgSARgTQAQgSARgLIAHgDIAEgCIABAAIABgBQAHABADADIASAfQANAdALAfIADAKIABADIAGAXIAAAEIACAHIAHApg");
	this.shape_3.setTransform(30.3,15.7,1,1,0,0,0,1.5,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAvIgCgBIgIgGIgCgBIgCgBIhHgkQgCgBABgGIAAgBIAAgCIABgEIADgHQAIgSARgTQAQgSARgLIAHgDIAEgCIABAAIABgBQAHABADADIASAfQANAdALAfIADAKIABADIAPBLg");
	this.shape_4.setTransform(30.3,15.7,1,1,0,0,0,1.5,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},19).wait(2));

	// trunk
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F7712A","#F95024"],[0,1],1.2,1.5,0,1.2,1.5,34.2).s().p("AC4gkYAAAAgBACgCAEYgCADgEAGgGAFYgFAGgHAFgIAGYgJAHgJAHgKAHYgLAIgLAIgMAGYgHAEgGADgGADYgHACgHADgGACYgHACgHACgGABYgHABgGABgGAAYgMAAgKgDgHgFYgIgEgGgGgFgHYgGgIgFgJgFgKYgCgGgCgFgDgFYgCgFgCgGgCgFYgCgGgCgGgCgFYgBgGgCgGgCgFYgDgLgDgLgDgJYgCgJgCgIgDgHYgDgOgDgIAAAAIgCgEYgSg0g5gcg1ATYgwARgbAyAKAxYAAAAADAKAEASYADAIADALAFAMYACAGADAHADAGYADAGADAIAEAHYAHAPAJAQALARYALARANARARASYAQARAVARAYAOYAYAOAdAKAdADYAdADAagDAYgHYAYgGAVgKASgJYATgKAQgLAPgKYAPgKANgKAMgJYAMgKALgIAJgIYAJgIAIgIAHgFYAGgGAGgDAEgCYADgCADgBAAAAYAfgNAPghgMgfYgMgfgjgQgfANYgPAFgLALgHAO");
	this.shape_5.setTransform(66.1,13.9,1,1,0,0,0,1.2,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#F7712A","#F95024"],[0,1],1.1,1.5,0,1.1,1.5,32.5).s().p("ACsgjYAAAAgBADgCAEYgCADgEAGgFAGYgFAGgHAFgHAGYgIAHgJAIgKAIYgKAIgLAIgMAHYgGAEgGADgGADYgGADgHADgGACYgNAFgNACgLAAYgKgBgIgDgGgFYgFgEgFgGgFgJYgFgHgEgLgFgLYgEgLgEgLgEgMYgDgMgEgMgCgLYgDgMgDgLgCgJYgDgKgCgIgCgHYgDgOgDgIAAAAIgBgEYgRg1g5gdg0ASYgxAPgdAyAKAxYAAAAACAKAEARYACAJADALAEAMYADAGACAGACAHYADAGADAHADAHYADAIAEAHAEAIYAEAIAFAJAEAIYAFAIAGAJAGAJYAGAJAGAIAIAJYAPASASASAWAQYAXAQAcAOAdAFYAeAGAdgCAZgHYAZgGAVgLATgKYASgLAQgLAPgLYAOgLANgKALgKYAMgKAKgJAJgIYAIgJAIgIAGgFYAGgGAGgEAEgCYADgCADgBAAAAYAegOANgjgNgeYgOgegjgOgfAOYgOAGgLAMgGAN");
	this.shape_6.setTransform(65.1,13.4,1,1,0,0,0,1.2,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#F7712A","#F95024"],[0,1],1.1,1.5,0,1.1,1.5,30.9).s().p("AChghYAAAAgBADgCAEYgCAEgDAFgFAGYgFAGgGAGgIAHYgHAHgJAIgJAJYgKAIgKAJgMAHYgFAEgGAEgGADYgGADgHADgGACYgMAFgMACgJgBYgJAAgFgEgFgFYgEgEgEgHgEgJYgFgJgEgLgEgMYgCgGgCgGgCgHYgCgFgBgGgCgGYgBgHgCgGgBgGYgCgGgBgGgBgGYgDgMgCgLgCgJYgCgKgCgJgCgHYgDgOgDgJAAAAIgBgDYgQg1g4gfg1AQYgxAPgeAxAJAxYAAAAABAKAEARYACAJADALAEALYAEANAEANAGAOYADAHADAIAEAIYACAEABAEACAEYACAEADAEACAEYAIARALASANASYAOASAQATAUARYAUASAaAQAfAJYAeAJAgAAAagHYAbgGAVgMATgLYAJgFAIgGAIgGYAIgGAIgGAHgFYANgMANgLALgKYALgLAKgKAIgIYAIgJAHgJAHgGYAFgFAFgEAEgDYAEgCACgCAAAAYAegPALgjgPgeYgPgdgkgMgeAPYgOAHgKAMgFAO");
	this.shape_7.setTransform(64,14,1,1,0,0,0,1.2,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#F7712A","#F95024"],[0,1],1.1,1.4,0,1.1,1.4,34).s().p("AC2gkYAAAAgBADgCADYgCAEgEAGgGAGYgFAGgHAFgIAGYgIAHgKAIgKAIYgKAIgMAIgMAHYgGADgHAEgGADYgHADgGADgHACYgNAEgOADgMAAYgLAAgJgDgHgFYgHgFgGgGgFgIYgGgIgFgKgFgLYgEgLgFgLgEgMYgDgMgEgMgDgLYgDgMgDgLgDgJYgCgKgCgIgDgHYgDgPgDgIAAAAIgBgEYgSg0g5gdg0ASYgxAQgcAyAKAxYAAAAACALAFARYACAJAEALAEAMYACAHADAGACAHYADAGADAHAEAIYAHAPAIAQALARYALASAMASAQARYAQASATASAYAPYAXAQAdAMAeAEYAeAEAcgCAYgHYAZgGAWgKASgLYATgKARgLAPgLYAOgLAOgKAMgJYAMgKAKgKAJgIYAJgIAIgIAHgGYAGgFAFgEAEgCYAEgDADgBAAAAYAegNAOgigNgeYgNgfgjgOgfANYgOAGgLALgGAN");
	this.shape_8.setTransform(65.6,13.9,1,1,0,0,0,1.2,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#F7712A","#F95024"],[0,1],1.1,1.4,0,1.1,1.4,37.7).s().p("ADQgmYAAAAgBACgDAEYgDAEgEAGgHAGYgGAGgHAFgJAGYgJAHgLAIgLAIYgMAIgMAIgOAHYgGAEgIADgHADYgHADgHADgIACYgPAFgPADgOAAYgNAAgNgCgKgFYgKgFgHgGgHgIYgHgIgHgKgGgLYgDgFgDgFgCgHYgDgEgCgGgDgGYgCgGgCgHgDgFYgCgHgCgGgCgFYgEgMgDgLgDgKYgDgKgDgJgCgHYgEgPgEgIAAAAIgBgEYgTg0g5gcg1ATYgwASgbAzAMAxYAAAAACALAGASYADAKADALAGANYACAHADAHADAGYAEAHAEAIADAIYAFAIAEAIAFAJYAFAIAFAJAHAJYAMASAPASASASYATASAWARAaAOYAbANAeAJAdACYAeACAbgDAZgHYAZgHAWgJATgKYAUgKASgLAQgKYAQgLAPgJAMgKYAOgKALgJAKgIYAKgJAJgIAHgFYAHgGAGgDAEgDYAFgCACgBAAAAYAfgMAPghgMgfYgMgfgjgPgeAMYgOAFgLAKgGAM");
	this.shape_9.setTransform(68.5,13.4,1,1,0,0,0,1.2,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:66.1}}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},3).to({state:[{t:this.shape_8,p:{x:65.6,y:13.9}}]},3).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_8,p:{x:66.6,y:13.4}}]},5).to({state:[{t:this.shape_5,p:{x:66.6}}]},1).wait(2));

	// head
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#F77A12","#F95024"],[0,1],0,0,0,0,0,40.3).s().p("AkWEXQh0hzAAikQAAijB0hzQAvgwA3gcQBQgoBgAAQBhAABQAoQAuAYAoAkIAQAQQB0BzAACjQAABXghBKQgdBAg2A2QhzB0ikAAQijAAhzh0g");
	this.shape_10.setTransform(25.9,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(21));

	// righttusk
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAlA8IgigRIgWgIIgDAAIgIgDIghgGIgBgDIAAgEQAAgHADgHQAFgRAOgWQANgWAOgNQAIgHADgBIABAAIABgBIABAAIACAAIAEABIADADIACADIACADIANASIAKASIACADIABAEQAGAMAGAQIAKAjIAFApg");
	this.shape_11.setTransform(59.3,9.4,1,1,0,0,0,1.1,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdA4IgagNIgWgIIgDAAIgIgDIghgGIgBgDIAAgEQAAgHADgHQAFgRAOgWQANgWAOgNQAIgHADgBIABAAIABgBIABAAIACAAIAEABIADADIACADIACADIANASIAKASIACADIABAEQAGAMAGAQIAJAgIAGAsg");
	this.shape_12.setTransform(59.3,9.4,1,1,0,0,0,1.1,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},19).wait(2));

	// leftear
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().rs(["#F73C3F","#F95024"],[0,1],0.1,0.1,0,0.1,0.1,29.9).ss(45,1,1).p("ABIgPIiOAf");
	this.shape_13.setTransform(-7.9,-23);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().rs(["#F73C3F","#F95024"],[0,1],0.1,0.1,0,0.1,0.1,29.9).ss(45,1,1).p("ABJgJIiRAT");
	this.shape_14.setTransform(-8,-23);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().rs(["#F73C3F","#F95024"],[0,1],0.2,0.2,0,0.2,0.2,29.8).ss(45,1,1).p("ABKgDIiTAH");
	this.shape_15.setTransform(-8,-23);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().rs(["#F73C3F","#F95024"],[0,1],0.2,0.2,0,0.2,0.2,29.8).ss(45,1,1).p("ABJgJIiRAT");
	this.shape_16.setTransform(-8,-23);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().rs(["#F73C3F","#F95024"],[0,1],0.2,0.2,0,0.2,0.2,29.8).ss(45,1,1).p("ABIgQIiOAh");
	this.shape_17.setTransform(-8,-23);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().rs(["#F73C3F","#F95024"],[0,1],0,0,0,0,0,29.9).ss(45,1,1).p("ABIgOIiPAd");
	this.shape_18.setTransform(-7.9,-23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},3).to({state:[{t:this.shape_15}]},3).to({state:[{t:this.shape_16}]},3).to({state:[{t:this.shape_17}]},3).to({state:[{t:this.shape_17}]},3).to({state:[{t:this.shape_18}]},4).wait(2));

	// rightear
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().rs(["#F73C3F","#F95024"],[0,1],0,0,0,0,0,29.9).ss(45,1,1).p("ABGgVIiLAr");
	this.shape_19.setTransform(53.6,-32.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().rs(["#F73C3F","#F95024"],[0,1],0,0,0,0,0,29.8).ss(45,1,1).p("ABEgbIiGA3");
	this.shape_20.setTransform(53.6,-32.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().rs(["#F73C3F","#F95024"],[0,1],0,0.1,0,0,0.1,29.8).ss(45,1,1).p("ABBghIiBBD");
	this.shape_21.setTransform(53.6,-32.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().rs(["#F73C3F","#F95024"],[0,1],0,0.1,0,0,0.1,29.8).ss(45,1,1).p("ABEgbIiHA3");
	this.shape_22.setTransform(53.6,-32.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().rs(["#F73C3F","#F95024"],[0,1],0,0.1,0,0,0.1,29.9).ss(45,1,1).p("ABGgVIiLAr");
	this.shape_23.setTransform(53.5,-32.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().rs(["#F73C3F","#F95024"],[0,1],0,0,0,0,0,29.9).ss(45,1,1).p("ABIgOIiPAd");
	this.shape_24.setTransform(53.7,-32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_20}]},3).to({state:[{t:this.shape_21}]},3).to({state:[{t:this.shape_22}]},3).to({state:[{t:this.shape_23}]},3).to({state:[{t:this.shape_23}]},3).to({state:[{t:this.shape_24}]},4).wait(2));

	// fronttoes
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABHA3QgKgEgCgCQgKgIgBgMQgBgKAEgGIAFgGQALgIAOgBQAOgBALAGIAGAGQAGAIABAHQABALgLALIgKAHQgIADgGABIgDAAIgLgCgAkCAzQgGgEgCgCQgGgIAAgLQABgIADgFIAFgFQAIgGAKABQALAAAHAIIADAFQAEAHgBAHQAAAKgJAHIgIAFQgEACgGAAQgGgBgEgCgAi5AyQgGAAgEgDIgHgGQgHgIAAgKQABgIAEgGIAEgEQAIgGALABQAKAAAHAIIAEAFQADAGAAAHQgBAKgIAIQgDACgFADIgIABIgDAAgACdAoQgHgCgEgEQgMgIAAgMQgBgJAFgGIAFgGQAKgKAOgBQAOgBALAIIAGAGQAGAGAAAIQABALgKAKIgKAIQgGADgIAAIgEAAQgGAAgEgBgAiNAXQgGgEgCgCQgHgIABgJQAAgIAEgFIAFgFQAIgHAKABQALAAAHAIIADAGQAEAGgBAGQAAAKgJAHIgIAFQgEACgGAAQgGgBgEgCgADhACQgHgCgEgCQgLgIgBgNQgBgJAFgHIAFgGQAKgKAOgBQAOgBALAIQAFAEABACQAGAHABAIQABAMgLAKIgJAGQgGADgJAAIgDAAQgHAAgEgBg");
	this.shape_25.setTransform(-4.8,50.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABYA9QgKgDgCgCQgLgHgCgMQgBgKAEgHIAEgGQAKgKAOgCQAOgCAMAHIAGAFQAHAHABAIQACALgKALQgCACgIAGQgIAEgGABIgFAAIgJgBgAjGA4QgGAAgDgDIgIgHQgGgIABgLQACgIAEgFIAEgEQAJgGAKACQALABAGAIIADAGQAEAGgBAHQgCAKgJAHQgCADgGACIgFAAIgGAAgAkPA0IgHgHQgGgIACgLQABgIADgEIAFgFQAIgFALABQAKACAHAHIADAGQADAGgBAHQgBAKgJAHIgJAFIgKABQgGgBgEgDgACtAoQgHgCgFgEQgMgHgBgMQgBgIAEgHIAFgGQAIgKAOgCQAOgCAMAHIAGAFQAHAHABAGQABAMgJAKQgEAFgFAEQgGADgIABIgHABIgHgBgAiOAkQgGgBgEgDQgGgEgBgDQgHgIABgJQACgIAEgEQABgCAEgDQAIgGALABQAKACAHAIIADAFQADAHgBAHQgBAJgJAGIgJAFIgIABIgCAAgADugCQgHgBgFgDQgLgHgCgMQgBgJAEgIIAEgHQAKgKAOgCQAOgCAMAHQAFAEABACQAHAGABAJQABALgJALIgJAHQgGAEgJABIgHAAIgHgBg");
	this.shape_26.setTransform(-5,50.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABpBDQgKgDgCgCQgLgGgDgMQgCgKADgGIAEgHQAJgKAOgDQAOgDAMAGIAHAEQAHAHACAHQADALgKAMQgBADgIAGQgHAEgGACIgJAAIgGAAgAjTA+QgGAAgDgDIgHgHQgGgJACgLQACgIAFgEIAEgEQAJgFALACQAKADAGAIIADAFQADAHgCAHQgCAKgKAGQgCADgGABIgDAAIgIgBgAkSA6QgGgBgEgEIgGgHQgFgJACgKQACgIAEgEIAFgFQAIgEAKACQALADAGAHIACAGQADAHgCAHQgBAJgKAHIgJAEIgEAAIgGAAgAiaAuQgGgBgEgDQgFgEgBgDQgGgJACgJQACgIAEgEIAFgFQAJgEALACQAKACAGAIIADAGQACAHgBAGQgCAKgKAFIgIAEIgFABIgGgBgAC8AoQgHgBgFgEQgMgGgCgMQgCgIAEgIIAEgFQAIgLAOgDQANgDAMAHQAGACABACQAHAGACAHQACAKgJAMQgDAEgFAFQgGAEgIABIgJABIgFAAgAD7gGQgHgBgGgCQgMgHgCgMQgCgJADgHIAEgIQAJgKAPgDQANgDAMAGIAHAFQAHAGACAIQACAMgJALIgIAIQgGAEgIACIgJABIgFgBg");
	this.shape_27.setTransform(-5.2,50);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgCAgQgGAAgDgDIgHgHQgGgJACgLQACgHAFgEIAEgEQAJgFAKACQAKADAGAIIADAFQADAGgCAHQgCAKgKAGQgCADgGABIgDABIgHgCgAhBAcQgGgBgEgEIgGgHQgFgJACgJQACgIAEgEIAFgFQAIgEAKACQALADAGAHIACAGQADAGgCAHQgBAJgKAHIgJAEIgEAAIgGAAgAA2AQQgGgBgEgDQgFgEgBgDQgGgIACgJQACgIAEgEIAFgFQAJgFALACQAKACAGAJIADAGQACAHgBAGQgCAJgKAFIgIAEIgFABIgGgBg");
	this.shape_28.setTransform(-27.4,53.2,1,1,4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhYBEQgLgFgEgMQgDgJADgHIAEgIQAIgJAOgEQANgEANAFQAHACAAABQAIAGACAHQADALgIAMQgBAEgIAHQgHAEgGACQgGACgIAAQgKgDgDgCgAAEAnQgGAAgFgEQgMgFgDgMQgDgHADgIIAEgGQAHgLANgEQANgEANAGQAFACACACQAHAFACAHQAEAKgJAMQgCAEgFAFQgGAFgIACIgLABIgDAAgABAgKQgHgBgGgCQgNgFgDgMQgCgJACgIIAEgIQAIgLAPgEQANgEAMAFIAIAFQAHAFACAJQADALgIAMIgIAJQgFAEgIACQgGACgEAAIgEAAg");
	this.shape_29.setTransform(14.5,49.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgEAeQgGgBgEgDIgGgIQgFgJADgKQACgHAFgFIAFgDQAJgEAJADQALADAFAIIACAGQADAGgCAHQgDAJgKAGQgDADgGABQgFAAgEgCgAhDAVQgGgBgDgEIgGgIQgEgIACgKQADgIAEgEIAFgEQAJgDAKADQAKADAFAHIACAGQACAHgCAGQgCAJgJAGQgFADgFABIgKgBgAA1ASQgGgCgEgDIgGgIQgFgIACgJQADgHAEgEIAGgEQAJgFALADQAJADAGAJIACAFQACAIgCAFQgCAJgKAFIgJAEIgCAAIgIgBg");
	this.shape_30.setTransform(-24.8,53,1,1,-8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhUA9QgKgEgCgCQgLgGgCgNQgCgJAEgHIAFgHQAJgIAPgCQANgDAMAIIAHADQAHAIABAHQACAMgKAKQgCADgIAGQgIAEgGABIgEAAIgKgBgAAAAoQgHgCgFgEQgLgHgBgMQgCgIAEgHIAFgGQAIgKANgCQAOgCAMAIQAFADABACQAHAGABAHQACAKgKALQgDAEgGAEQgGAEgIABIgFAAIgIAAgABBgBIgNgEQgMgIgBgMQgBgJADgIIAFgHQAKgJAPgCQAOgDALAHIAHAGQAGAGABAIQACAMgKALIgJAIQgGADgIABIgHABQgEAAgDgBg");
	this.shape_31.setTransform(12.4,50.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABYA9QgKgEgCgCQgLgGgCgNQgBgJAEgHIAEgHQAKgIAOgCQAOgDAMAIIAHADQAGAIABAHQACAMgKAKQgBADgJAGQgHAEgHABIgEAAIgKgBgAjHA4QgFAAgEgDIgIgGQgGgJABgKQACgIAEgFIAEgEQAJgFAKABQALABAHAIIACAFQAEAHgBAHQgCAJgJAIQgCADgGACIgDAAIgIgBgAkQA0IgGgHQgGgIABgKQABgIAEgFIAFgFQAIgEAKABQAKACAHAGIADAGQADAHgBAHQgBAJgJAHQgEAEgFABIgKABQgGAAgEgEgACsAoQgHgCgEgEQgLgHgCgMQgBgIAEgHIAEgGQAJgKAOgCQAOgCAMAIQAFADABACQAGAGABAHQACAKgKALQgDAEgFAEQgGAEgJABIgFAAIgJAAgAiPAkQgGgBgFgDIgGgGQgGgIABgJQABgIAEgEQABgCAEgDQAIgGALABQAKACAHAIIADAFQADAHgBAGQgBAJgJAHIgIAEIgGABIgFAAgADugBIgMgEQgMgIgBgMQgBgJADgIIAEgHQAKgJAQgCQANgDALAHIAHAGQAHAGABAIQABAMgJALIgKAIQgFADgJABIgHABQgEAAgDgBg");
	this.shape_32.setTransform(-4.9,50.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA2AxIgLgHQgKgIAAgNQAAgJAFgHIAFgFQALgIAOAAQAOAAALAIIAFAFQAGAJAAAHQAAAMgLAJIgKAHQgJACgGAAQgHAAgHgCgAj1AxQgGgDgCgCQgIgIAAgKQAAgIAEgFIAEgGQAHgHALAAQAKAAAIAHIAEAGQAEAGAAAHQAAAKgIAIIgIAFQgEACgGAAQgGAAgEgCgAi2ApQgGgDgCgCQgIgHAAgLQAAgIAEgGIAEgEQAHgHALAAQAKAAAIAHIAEAEQAEAHAAAHQAAAKgIAIIgIAFQgEACgGAAQgGAAgEgCgACNAnQgHgCgEgEQgKgJAAgMQAAgJAEgGIAGgFQAKgJAPAAQAOAAAKAJIAGAFQAGAHAAAIQAAALgMAKQgDAEgHACQgFADgJAAQgJAAgFgDgAiCANQgHgDgBgCQgIgIAAgJQAAgIADgGIAFgFQAHgHALAAQAKAAAIAHIADAFQAFAHAAAHQgBAJgHAIIgIAFQgFACgFAAQgHAAgDgCgADUAGQgHgCgEgDQgLgIABgNQAAgJAEgGQACgEAEgCQALgKAOABQAOgBAKAKQAFADABADQAGAGgBAJQAAAMgLAJIgKAFQgFADgJAAQgJAAgFgDg");
	this.shape_33.setTransform(-4.6,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_26}]},3).to({state:[{t:this.shape_27}]},3).to({state:[{t:this.shape_29},{t:this.shape_28}]},3).to({state:[{t:this.shape_31},{t:this.shape_30}]},3).to({state:[{t:this.shape_32}]},3).to({state:[{t:this.shape_33}]},4).wait(2));

	// front side legs
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#F76D21","#F24841"],[0,1],0.9,0,0,0.9,0,25.3).s().p("AAgDYIhpgJQhpgJAKhkIAXjgQAJhiBpAIIBpAJQBpAJgLBlIgWDfQgJBbhYAAIgRgBg");
	this.shape_34.setTransform(-28.9,34.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#F76D21","#F24841"],[0,1],0.8,-0.1,0,0.8,-0.1,25.3).s().p("AiBCSIgwjcQgVhgBmgZIBngYQBlgYAWBjIAwDbQAVBihlAXIhnAYQgUAFgQAAQhHAAgRhPg");
	this.shape_35.setTransform(7.1,34.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#F76D21","#F24841"],[0,1],1,0,0,1,0,25.3).s().p("AARDaIhogRQhogQARhiIAmjeQAQhhBpAPIBoAQQBQANAIA9QACATgEAXIgBAGIglDXQgOBUhOAAQgNAAgPgCg");
	this.shape_36.setTransform(-28.9,34.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#F76D21","#F24841"],[0,1],0.7,-0.2,0,0.7,-0.2,25.3).s().p("Ah3CbIg/jYIgFgTIABgFQAEgXgCgTQAOgpA7gTIBnggQBigfAcBiIBADXQAcBfhkAfIhmAfQgXAHgUAAQg/AAgVhIg");
	this.shape_37.setTransform(7.2,34.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#F76D21","#F24841"],[0,1],1,0.1,0,1,0.1,25.3).s().p("AACDbIhmgZQhngXAYhhIA2jaQAWhgBnAWIBnAYQA+AOAQApQADAKABAKQgFAJgDAJQACATgEAXIgBAFIAAAEIABADIgvDBQgTBNhGAAQgRAAgUgEg");
	this.shape_38.setTransform(-29,34.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#F76D21","#F24841"],[0,1],0.3,-0.2,0,0.3,-0.2,25.3).s().p("AhwCjIhNjTIgBgCIgBgEIABgFQAEgXgBgTQADgJAFgJQgBgLgEgJQASgYAngQIBlgnQBegmAkBgIBODSQAkBehiAlIhkAmQgbALgXAAQg5AAgZhDg");
	this.shape_39.setTransform(7.6,34.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#F76D21","#F24841"],[0,1],1.2,0.1,0,1.2,0.1,25.3).s().p("AAEDbIhmgZQhngXAYhhIA2jaQAWhgBmAWIBoAYQA+AOAQApIAAABIgJANQAEAJACALQgFAIgCAKQADASgDAYIAAAFIAAAEIABABIgsC1QgTBNhGAAQgRAAgUgEg");
	this.shape_40.setTransform(-29.2,34.8,1,1,4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#F76D21","#F24841"],[0,1],0,-0.3,0,0,-0.3,25.3).s().p("AhmCrIhcjNIgBgCIAAAAIgBgEIABgGQACgXgDgTQADgJAEgJQgCgKgEgKIAKgMQAQgSAbgOIBjguQBbgsAqBdIBdDMQArBbhgAsIhgAtQgfAOgZAAQg1AAgbg8g");
	this.shape_41.setTransform(7.8,34.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#F76D21","#F24841"],[0,1],1.1,0.1,0,1.1,0.1,25.3).s().p("AgMDaIhlggQhlgeAfhfIBFjWQAdheBkAdIBnAfQAxAQASAeQAEAHACAIIABABQgGAGgFAGQAEAKABAKQgFAJgDAJQABATgEAXIAAACIgBADIABAEIAAABIg5CxQgXBIg/AAQgUAAgYgIg");
	this.shape_42.setTransform(-29.1,34.8,1,1,-8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#F76D21","#F24841"],[0,1],0.2,-0.2,0,0.2,-0.2,25.3).s().p("Ah7CcIg9jVIAAgCQAHgWABgTQAFgJAGgHQAAgLgCgKIAMgKIAAgBQgBgIgDgIQARgOAbgJIBoggQBhgfAdBiIA/DYQAeBfhlAeIhmAgQgXAHgUAAQhAAAgVhIg");
	this.shape_43.setTransform(7.6,34.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#F76D21","#F24841"],[0,1],1.3,0,0,1.3,0,25.3).s().p("AAUDaIhogRQhogQARhiIAnjeQAPhhBoAOIBpARQAzAJAWAcQAFAGAEAIIAAABQgFAGgEAGQAFAKADAKQgEAJgCAJQAEATgBAXIABACIgBAEIABADIABABIggC4QgOBUhOAAQgNAAgPgDg");
	this.shape_44.setTransform(-29.3,34.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#F76D21","#F24841"],[0,1],0.9,-0.1,0,0.9,-0.1,25.3).s().p("AAvDWIhqgCQhogCADhkIAHjhQAChiBpAAIBqACQBpABgEBlIgHDgQgCBjhlAAIgEAAg");
	this.shape_45.setTransform(-28.9,34.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#F76D21","#F24841"],[0,1],0.9,-0.1,0,0.9,-0.1,25.3).s().p("AiKCIIghjeQgPhhBogSIBogRQBngRAOBkIAhDeQAPBjhnARIhpAQQgOACgMAAQhPAAgMhVg");
	this.shape_46.setTransform(7.1,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34}]}).to({state:[{t:this.shape_37},{t:this.shape_36}]},3).to({state:[{t:this.shape_39},{t:this.shape_38}]},3).to({state:[{t:this.shape_41},{t:this.shape_40}]},3).to({state:[{t:this.shape_43},{t:this.shape_42}]},3).to({state:[{t:this.shape_43},{t:this.shape_44}]},3).to({state:[{t:this.shape_46},{t:this.shape_45}]},4).wait(2));

	// body
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#F75A2A","#EB3E29"],[0,1],0,0,0,0,0,47.1).s().p("AlMEiQiJh4AAiqQAAipCJh4QCKh4DCAAQDDAACJB4QCKB4AACpQAACqiKB4QiJB4jDAAQjCAAiKh4g");
	this.shape_47.setTransform(-1.8,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(21));

	// back toes
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgDAoQgIgCgFgEQgGgFgBgEQgIgLAEgNQADgJAGgGIAHgFQALgHAMAEQAMADAIAMIADAHQADAJgCAIQgEANgMAHQgHAEgEAAIgGAAIgGgBgAhTAdQgJgCgEgDIgHgKQgHgLAEgMQACgKAGgGIAGgEQALgHAOADQANAEAHAMIADAHQACAIgBAJQgEAMgMAHIgLAFIgCAAIgLgCgABDAWQgGAAgFgFQgHgFgBgEQgGgLACgNQADgJAGgGIAHgFQAMgGAMADQANADAHAMQADAFAAACQADAKgDAHQgCAMgNAIIgLAEIgEAAQgFAAgFgCg");
	this.shape_48.setTransform(-15.8,47.9,1,1,4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhZA3QgJgDgCgCQgLgIgBgMQAAgKAEgHIAFgGQAKgIAOgBQAOgBAMAGIAGAGQAGAIAAAIQABALgKAKQgCACgIAFQgJADgGABIgCAAIgMgCgAgCAoQgIgCgEgEQgLgIgBgMQAAgJAEgGIAFgGQAKgKAOgBQAOgBALAIIAGAGQAGAGAAAIQABAMgKAKIgKAHQgGADgIABIgDAAQgHAAgDgCgABBACQgHgCgEgCQgLgIgBgNQgBgJAFgHIAFgGQAJgKAPgBQAOgBALAJQAFADABACQAGAHAAAIQABAMgKALIgKAFQgGADgIABIgDAAQgHAAgEgCg");
	this.shape_49.setTransform(25.6,46.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AjkA8QgIgDgEgEQgGgFAAgFQgGgMAFgMQAFgKAHgFIAHgEQAMgEANAFQALAEAGANIACAJQACAJgEAIQgFAMgNAEQgHADgEAAIgDAAQgGAAgEgDgACEA9IgMgFQgLgHgBgMQgCgKAEgHIAEgGQAKgKAOgCQAOgCAMAHIAHAFQAGAIABAHQACALgKALQgBADgIAFQgJADgGABIgFABIgJgBgAicA1QgGgBgEgFQgGgGgBgFQgEgMAEgNQAEgIAHgFIAHgEQANgEAMAEQAMAGAGALQACAGgBACQACAKgEAIQgEALgNAHIgNACQgHAAgGgEgAkzAnQgIgDgDgEIgHgLQgFgMAGgLQADgJAHgGIAHgDQAMgGAOAFQAMAGAFANIACAGQABAJgDAKQgFALgNAFIgMAEQgFgBgIgDgADaAoQgIgBgEgEQgMgHgCgMQgBgJAEgHIAFgGQAJgLAPgCQAOgCALAIIAHAFQAGAHABAHQABALgJALIgJAIQgGAEgIABIgHAAIgHgBgAEbgCQgHgBgFgDQgLgIgCgMQgBgJAEgHIAFgHQAIgKAPgCQANgCAMAHQAFADABACQAHAHABAIQACAMgKALIgJAHQgGAEgIABIgHAAIgHgBg");
	this.shape_50.setTransform(5,45.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AjlBEQgIAAgFgEQgIgDgDgEQgGgFAAgGQgFgMAHgMQAFgJAHgFIAHgEQANgDAMAGQALAFAGAOIAAAIQACAKgEAIQgHALgNACQgGADgEAAIgBAAgAipA/QgGgCgEgFQgFgHgBgEQgDgNAFgMQAEgJAIgFIAHgDQANgDALAFQAMAGAFANIABAIQABAKgFAIQgEAKgOAGIgNABQgHgBgFgDgACVBCIgMgEQgLgFgDgMQgCgKADgHIAEgHQAJgLAOgDQAOgDANAGIAHAFQAHAHABAIQACALgIALQgCADgHAFIgPAGIgIABIgGgBgAk/AmQgIgEgDgEIgGgLQgEgMAHgLQAEgJAHgFIAHgDQANgFANAGQAMAHAEANIABAGQABAJgEAKQgGAKgNAFIgMADQgGgBgHgEgADpAoQgHgBgFgEQgMgGgDgMQgBgJADgIIAEgFQAJgLAOgDQAOgDAMAGIAHAFQAGAGACAHQACAMgIALIgIAJQgGAEgJACIgJABIgFgBgAEngGQgHgBgFgDQgLgHgDgMQgBgJADgHQABgEADgEQAHgKAPgDQANgDANAGIAGAFQAHAGACAIQACAMgIAMIgJAIQgGADgIACIgJACIgFgBg");
	this.shape_51.setTransform(4.8,45.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhQBDIgMgEQgMgFgCgMQgCgKADgHIAEgHQAJgLAOgDQAOgDAMAGIAHAFQAHAHACAIQACALgJALQgBADgIAFIgOAGIgIAAIgGAAgAADApQgHgBgEgEQgMgGgDgMQgCgJAEgIIAEgFQAIgLAOgDQAOgDAMAGIAHAFQAGAGACAHQABAMgHALIgJAJQgGAEgIACIgJAAIgFAAgABAgFQgGgBgFgDQgMgHgDgMQgBgJADgHQABgEADgEQAIgKAOgDQAOgDAMAGIAHAFQAGAGACAIQADAMgJAMIgIAIQgGADgJACIgIABIgGAAg");
	this.shape_52.setTransform(28.9,44.4,1,1,-4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("ABGAyQgHgBgGgEQgGgCgDgFQgEgHgBgEQgCgOAGgLQAEgHAIgFIAIgDQANgCAKAGQAMAHAEAMIABAIQgBAKgFAIQgEAKgPAFgAgCAuQgIgBgEgDQgIgEgDgEQgFgGAAgGQgEgMAHgKQAGgJAIgEIAHgEQAMgCAMAHQAKAGAFANIAAAIQABAKgFAIQgHAKgNABIgJACIgCAAgAhZALQgJgFgCgEIgFgLQgDgMAIgLQAEgJAIgFIAHgCQANgEAMAHQAMAHADANIABAIQAAAJgFAJQgHAJgNAEIgMACQgGgBgGgEg");
	this.shape_53.setTransform(-19.5,47.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhLBIQgKgBgCgCQgMgEgEgMQgCgKACgHIAEgHQAIgLAOgEQAOgEAMAFIAIAEQAHAHACAHQADALgIAMQgBADgHAGQgIAEgGACQgGABgFAAIgDAAgAAGApQgGAAgFgEQgNgFgEgMQgCgJADgIIAEgGQAIgMANgEQAOgEAMAGIAHAEQAGAGADAHQACAMgHALIgHAKQgGAFgIACIgLABIgDAAgABAgKQgHAAgFgDQgMgGgEgMQgBgJACgHQABgEADgEQAGgLAPgEQANgEANAGIAHAEQAHAFACAJQADALgHANIgIAIQgGAEgIADQgGACgFAAIgDgBg");
	this.shape_54.setTransform(26.8,45.6,1,1,8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgIAoQgJgCgDgEQgGgFAAgGQgHgLAGgMQAFgJAHgFIAGgFQANgEAMAFQALAFAGANIACAIQACAJgEAIQgGALgMAEQgIADgDAAQgHAAgFgDgAA/AiQgGgCgEgEQgFgGgBgFQgEgMAEgMQADgIAHgGIAHgEQANgEALAEQAMAGAHAMQACAGgBABQABAKgEAIQgDALgOAHIgMABQgHAAgGgDgAhXAUQgJgDgCgEIgHgLQgFgLAGgMQADgJAHgGIAHgDQAMgGANAFQANAGAFAMIACAIQABAJgDAJQgGALgMAGIgMADQgGAAgHgEg");
	this.shape_55.setTransform(-17,47.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AjkA8QgJgDgDgEQgGgEAAgGQgHgLAGgNQAFgKAHgFIAGgEQAOgEAMAFQALAEAGAOIACAIQACAKgEAIQgGALgMADQgIAEgDAAQgIAAgFgDgACFA8QgJgCgDgCQgLgGgCgMQgBgKADgHIAFgHQAJgKAPgCQAPgCALAHIAHAFQAGAIABAIQACALgKAKQgBADgJAFQgIADgGABIgGAAIgIgBgAicA1QgGgBgEgEQgFgHgBgEQgEgNAEgMQADgJAHgEIAHgFQANgEALAFQAMAFAHAMQACAFgBACQABALgEAIQgDAKgOAHIgMACQgHAAgGgEgAkzAoQgJgDgCgFIgHgKQgFgMAGgMQADgJAHgFIAHgEQAMgGANAGQANAGAFAMIACAHQABAIgDALQgGAKgMAGIgMADQgGAAgHgDgADbApQgIgBgEgFQgLgHgDgMQgBgJAFgHIAEgGQAKgKAOgCQAOgDALAIIAHAFQAFAHABAHQABAMgIAKIgJAJQgGAEgIABIgHAAIgHgBgAEbgBQgHgCgFgDQgKgHgCgNQAAgJADgHQABgEAEgDQAHgKAPgCQAOgCAMAHIAHAFQAFAHACAIQABAMgJALIgJAIQgGADgJABIgHABIgHgBg");
	this.shape_56.setTransform(5,45.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("ABXAxIgLgHQgKgJAAgLQAAgLAFgGIAFgFQALgIAOAAQAOAAALAIIAGAFQAFAJAAAIQAAAKgLAKIgKAHQgJADgGgBQgGABgIgDgAjUAqQgGgCgDgCQgFgFgBgDQgGgJADgKQACgIAFgEIAFgDQAJgGAKAEQAKACAGAIIACAGQADAIgCAGQgDAKgKAGQgFACgDAAIgFABIgGgBgACuAoQgHgDgEgEQgKgJAAgMQAAgJAFgGIAFgGQALgIAOgBQAOABALAIIAFAGQAGAHAAAIQAAALgLAKQgEAEgGADQgGACgJAAQgJAAgFgCgAkTAhQgHgCgCgCQgFgFgBgCQgGgJADgKQACgHAFgFIAFgDQAIgGALADQALADAFAJIACAFQACAGgBAIQgDAJgJAGIgJADIgDABIgIgCgAibAcQgFgBgEgEQgFgEgCgDQgEgJACgJQACgHAEgFIAGgEQAKgFAJACQAKAEAGAIQACAFAAABQACAHgCAHQgCAIgKAHIgJADIgDAAIgHgBgAD1AGQgHgCgEgEQgKgIAAgMQAAgJAFgHQACgDADgCQALgJAOAAQAOAAALAJQAEADABACQAGAIAAAIQAAAMgLAIIgKAGQgGADgJAAQgJAAgFgDg");
	this.shape_57.setTransform(6.4,46.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48}]}).to({state:[{t:this.shape_50}]},3).to({state:[{t:this.shape_51}]},3).to({state:[{t:this.shape_53},{t:this.shape_52}]},3).to({state:[{t:this.shape_55},{t:this.shape_54}]},3).to({state:[{t:this.shape_56}]},4).to({state:[{t:this.shape_57}]},3).wait(2));

	// backlegs
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#F73C3F","#F95024"],[0,1],0,0,0,0,0,23.5).s().p("AAvDWIhqgCQhogCADhkIAHjhQAChiBpAAIBqACQBpABgEBlIgHDgQgCBjhlAAIgEAAg");
	this.shape_58.setTransform(-17.3,29.7,1,1,4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#F73C3F","#F95024"],[0,1],0,0,0,0,0,23.5).s().p("AiACSIgwjcQgWhgBmgZIBngXQBmgZAVBjIAwDbQAVBihlAYIhnAXQgUAEgQAAQhGAAgRhOg");
	this.shape_59.setTransform(18.7,29.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#F73C3F","#F95024"],[0,1],0,0,0,0,0,23.5).s().p("Ah2CaIg/jXIgFgUQgEgaAGgUQAOgpA8gUIBngeQBiggAcBhIA/DXQAdBhhjAeIhnAfQgXAHgUAAQg/AAgVhJg");
	this.shape_60.setTransform(18.8,29.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#F73C3F","#F95024"],[0,1],0.1,0,0,0.1,0,23.5).s().p("AASDaIhpgRQhngQARhjIAmjeQAQhgBoAPIBoAQQBQANAIA9QgHAUAEAaIglDYQgPBVhNAAQgNAAgOgCg");
	this.shape_61.setTransform(-17.3,29.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#F73C3F","#F95024"],[0,1],-0.4,0,0,-0.4,0,23.5).s().p("AhuCiIhOjSIgBgBIAAgBIABgGQgEgaAGgUQgBgNgEgJQADgIAFgHQASgZAngQIBkglQBggnAjBfIBODSQAjBfhgAlIhlAmQgbAKgWAAQg5AAgZhDg");
	this.shape_62.setTransform(19.1,29.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#F73C3F","#F95024"],[0,1],0.3,0,0,0.3,0,23.5).s().p("AAEDaIhngXQhmgXAYhiIA2jbQAWheBmAWIBoAXQA+AOAPApQgFAHgDAIQAEAKABAMQgGAVAEAZIgBAHIAAAAIgvDCQgTBOhFAAQgRAAgUgFg");
	this.shape_63.setTransform(-17.5,29.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#F73C3F","#F95024"],[0,1],-0.7,0,0,-0.7,0,23.5).s().p("AhxCiIhLjKIABgEQgDgaAIgUQAAgNgEgJQADgIAGgGQgCgJgFgHQASgXAlgPIBkglQBggnAjBfIBODSQAjBfhgAlIhlAmQgbAKgWAAQg5AAgZhDg");
	this.shape_64.setTransform(19.4,29.6,1,1,-4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#F73C3F","#F95024"],[0,1],0.2,0,0,0.2,0,23.5).s().p("AgLDZIhngdQhjgfAfhgIBFjXQAchcBkAdIBmAfQAxAOASAeQAEAIADAIQgGAHgEAHQAEAKAAANQgIAUADAZIgBAFIAAACIAAAAIg+C+QgXBIg+AAQgUAAgXgIg");
	this.shape_65.setTransform(-17.4,29.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["#F73C3F","#F95024"],[0,1],-0.8,0,0,-0.8,0,23.5).s().p("AhmCqIhZjFIAAgEIAAgCQgEgYAGgUQgBgNgEgJQADgHAEgGIABgCIAAgBQgDgIgFgGIAKgNQAQgQAagNIBhgrQBeguApBcIBcDMQAqBcheAsIhiAsQgeAOgZAAQg0AAgbg8g");
	this.shape_66.setTransform(19.5,29.7,1,1,8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#F73C3F","#F95024"],[0,1],0.4,0,0,0.4,0,23.5).s().p("AAVDZIhpgPQhngRARhjIAmjeQAQhgBoAPIBoARQAyAHAWAbIABABIgJAOQAGAGAFAHIgBACIAAABQgEAGgBAHQAFAJADAMQgEAVAIAXIgiDBQgOBUhNAAQgNAAgOgDg");
	this.shape_67.setTransform(-17.6,29.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["#F73C3F","#F95024"],[0,1],-0.6,0,0,-0.6,0,23.5).s().p("Ah6CbIg9jPIABgFIAAgCQgBgYAJgTQABgNgDgKQADgGAGgFIABgCIAAgBQgCgIgEgHQAFgGAHgFQASgOAcgJIBmgeQBjggAcBhIA+DXQAdBhhjAfIhnAdQgXAIgUAAQg/AAgUhIg");
	this.shape_68.setTransform(19.3,29.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.rf(["#F73C3F","#F95024"],[0,1],0,0,0,0,0,23.5).s().p("AiKCIIghjeQgPhhBogSIBogRQBngRAOBkIAhDeQAPBjhnARIhpAQQgOACgMAAQhPAAgMhVg");
	this.shape_69.setTransform(18.7,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58,p:{rotation:4}}]}).to({state:[{t:this.shape_61},{t:this.shape_60}]},3).to({state:[{t:this.shape_63},{t:this.shape_62}]},3).to({state:[{t:this.shape_65},{t:this.shape_64}]},3).to({state:[{t:this.shape_67},{t:this.shape_66}]},3).to({state:[{t:this.shape_67},{t:this.shape_68}]},4).to({state:[{t:this.shape_69},{t:this.shape_58,p:{rotation:0}}]},3).wait(2));

	// tail
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F25229").s().p("Ag2i7YAAAAgDAGgFAJYgDAFgDAGgDAHYgDAHgEAIgEAIYgEAJgDAKgEAKYgEAKgDALgDAMYgCAGgBAGgBAGYgCAHgBAGgBAHYgBAGAAAHgBAHYAAAHAAAGAAAHYABAOABAPAFAPYABAEABADABAEYACADABAEABADYADAHAEAHAEAHYAHANAKALAJAKYAKAJAKAJAKAGYAFAEAEADAFADYAEACAFADAEACYAEACADACADACYAEABADACADABYAMAFAHADAAAAYAeAMAigPAMgdYAMgegOgigegMYgFgCgFgBgEgBIgDAAYAAAAgFgBgIgBYgCAAgCAAgDgBYgCAAgDgBgDAAYgCgBgDgBgEAAYgCgBgDgBgEgBYgGgCgGgEgGgDYgGgEgGgDgGgGYgDgCgDgEgCgDIgEgFYgBgCgBgCgCgCYgFgHgDgJgDgJIgEgPYgBgFgBgFgBgFYgBgGAAgFAAgFYAAgGgBgFAAgFYABgLAAgLABgKYABgKABgJACgJYABgJABgIACgHYABgHACgGABgGYACgKACgGAAAAYABgEgDgFgEgBYgEAAgEABgBAD");
	this.shape_70.setTransform(-50.8,-24.9,1,1,0,0,0,-1.8,-2.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F25229").s().p("AgIjCYAAAAgEAEgGAJYgEAEgDAFgFAGYgEAHgFAHgGAIYgFAIgFAJgGAJYgFAJgFALgGALYgCAFgCAGgDAGYgCAGgDAGgBAHYgCAGgCAHgCAGYgBAHgCAHgBAHYgBANgCAPACAPYABAEAAAEAAAEYABADABAEABAEYACAHABAIAEAGYAFAPAHAMAIAMYAIALAIALAIAHYAFAEAEAEAEAEYAEADADADAEADYAEADADADADACYAEACADACACACYAKAHAHAEAAAAYAbARAkgIARgcYARgbgIgkgbgRYgFgCgEgCgFgCIgCgBYAAAAgFgBgIgDYgCAAgCgBgDgBYgCgBgCgBgDgBYgCgBgDgBgDgBYgDgCgDgBgDgCYgGgDgFgEgFgEYgDgDgCgCgDgDYgDgCgCgDgCgDYgDgDgCgEgCgEIgDgFIgCgGYgEgJgCgJgBgJIgCgQYAAgFABgFAAgGYAAgFAAgFABgGYABgFAAgFABgGYADgKABgKADgKYADgKACgJAEgIYADgJACgHADgHYADgHACgGACgFYADgKADgFAAAAYABgFgCgEgEgCYgCgBgEABgCAD");
	this.shape_71.setTransform(-52.3,-24.6,1,1,0,0,0,-1.6,-2.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F25229").s().p("AhpirYAAAAgBAGgDAKYgBAGgCAGgCAHYgCAIgBAIgCAJYgDAKgBAKgBALYgCALgBALgBANYAAAGAAAGAAAGYAAAHAAAGABAHYABAHAAAFABAHYACAHABAHABAHYAEAOAFAOAHANYACAEACADACADYACADACAEACADYADADACADACADYACADADADADACYAKAMAMAIALAJYAMAGALAHALAEYAFACAFADAEACYAFABAFABAEACYAFABAEABAEABYAEABADABADAAYANACAIACAAAAYAfAFAegVAGgfYAGgggVgegggGYgFAAgFgBgFABIgCAAYAAAAgFAAgIABYgCAAgDAAgCAAYgDAAgCAAgDAAYgDAAgDAAgDAAYgDAAgDAAgEgBYgHAAgGgCgGgCYgHgCgHgDgHgEYgBgBgCgBgCgBIgFgEIgFgEYgBgCgCgBgBgCYgHgGgFgJgFgIIgHgNYgCgFgCgFgCgFYgCgFgBgFgCgFYgBgGgCgFgBgFYgBgLgDgKgBgKYAAgKgCgJAAgJYgBgJAAgIAAgHYAAgIAAgGAAgGYAAgKAAgHAAAAYAAgEgDgEgFAAYgDAAgEADgBAD");
	this.shape_72.setTransform(-49.7,-25.8,1,1,0,0,0,-2.2,-2.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F25229").s().p("AikiCYAAAAAAAGACALYAAAFABAHABAHYABAIACAIABAKYACAJADAKACALYACALAFALADALYACAFADAGACAGYACAGADAGADAGYADAGADAGAEAGIAMARYAIAMAKALAMAKYADACADADADACYADACADACADACYADACAEACADACYADACAEABADACYAOAHAOADAMAEYAOACANACALAAYAGAAAGAAAFgBYAFAAAFgBAFAAYAEAAAFgBAEAAYAEgBADgBADAAYANgDAHgCAAAAYAggGAUgfgHgfYgGgggfgUgfAHYgFABgFABgEACIgCABYAAAAgFADgHADYgCABgCABgDACYgCAAgCABgDABYgDACgDABgDABYgCABgEAAgDABYgGADgHAAgHABYgHAAgIABgHgCYgCAAgCAAgCgBIgGgCIgGgBYgCgBgCgBgCgBYgIgEgIgFgIgGIgMgKYgEgEgDgEgEgDYgEgEgDgEgDgFYgDgEgEgEgDgFYgFgJgGgIgFgJYgEgJgFgJgEgIYgDgIgEgHgDgHYgDgHgCgGgCgFYgEgKgCgFAAAAYgCgFgEgCgEACYgEABgCAEABAD");
	this.shape_73.setTransform(-49.2,-25.3,1,1,0,0,0,-2.9,-2.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F25229").s().p("Ai5hmYAAAAACAGAEAKYACAFACAGADAHYADAHAEAIADAJYAEAJAFAIAFAKYAFAKAHAJAGAKYADAFAEAFAEAGYAEAFAEAFAEAFYAFAFAEAFAFAFIAQAOYALAJAMAJAOAGYAEACADACADABYAEABAEABADACYAEABAEABADABYAEABAEABACAAYAPAEAPAAAOAAYANgCANgBALgDYAGgBAGgCAFgBYAFgCAEgCAEgBYAFgCAEgBAEgCYADgBADgCADgBYAMgGAHgDAAAAYAdgOAMgigOgdYgOgcgjgNgdAOYgEADgEACgEADIgCACYAAAAgDADgHAGYgCABgBABgCACYgCABgDABgCACYgCABgDACgCACYgDACgDABgDACYgFAEgHABgHAEYgHABgHADgIAAYgCAAgCABgCAAIgFgBIgHAAYgCAAgCgBgCAAYgJgBgJgEgJgEIgOgHYgFgCgEgEgFgCYgEgCgEgEgFgDYgEgEgEgDgEgDYgHgIgJgHgGgHYgHgIgHgHgFgHYgGgHgFgGgEgGYgEgGgEgFgDgFYgHgIgDgFAAAAYgDgEgFgBgDADYgDACgBAEABAD");
	this.shape_74.setTransform(-49.4,-24.1,1,1,0,0,0,-2.9,-1.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F25229").s().p("AiHibYAAAAgBAGgBALYgBAFgBAHAAAHYgBAIAAAJgBAJYAAAKAAAKAAALYAAALACAMAAAMYABAGABAGABAGYABAHABAFACAHYACAGABAHADAGYACAHADAHACAGYAGANAHAOAKALYACADACAEADACIAHAJYADACADADADADYACACADACADADYAMAKANAGAMAGYANAFAMAFALADYAFABAGABAFABYAFABAFABAFAAYAEABAEAAAEABYAEAAAEAAADAAYANABAHAAAAAAYAhABAagaABggYABgggZgbghAAYgFgBgEABgFABIgCABYAAAAgFABgIACYgDAAgCABgCAAYgDABgCAAgDAAYgDABgDAAgDABYgDAAgDAAgEAAYgHABgGgBgIgBYgGgBgIgBgHgEYgCgBgCAAgBgBIgGgDIgFgDYgCgBgCgCgCgBYgHgFgGgIgHgHIgJgNYgDgEgCgEgDgFYgDgEgCgFgCgFYgCgFgDgFgCgFYgDgKgEgKgCgKYgDgJgDgKgBgIYgCgJgCgIgBgHYgBgIgBgGgBgFYgCgLgBgGAAAAYAAgEgEgDgFAAYgDABgDADAAAD");
	this.shape_75.setTransform(-48.6,-25.7,1,1,0,0,0,-2.7,-2.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F25229").s().p("AgcjAYAAAAgDAFgGAJYgDAEgEAGgEAGYgEAHgEAHgFAIYgFAJgEAJgFAKYgFAKgEALgFALYgCAGgCAGgCAGYgCAGgCAGgBAHYgBAGgCAHgBAHYgBAHAAAHgBAHYAAANAAAPADAPYAAAEABADABAEYABAEABADABAEYABAEABADACAEYABADACAEABADYAGAOAJAMAIALYAJAKAIAKAJAHYAFAEAEAEAEADYAFADAEADADACYAEADAEADADACYADACADABACACYAMAGAGAEAAAAYAcAPAkgKAPgcYAPgdgKgjgcgPYgEgDgFgBgFgCIgCAAYAAAAgFgBgIgCYgCgBgCAAgDgBYgCgBgDgBgCgBYgDgBgDgBgDgBYgDgBgDgBgDgCYgGgCgFgEgGgEYgFgFgHgEgFgGYgBgCgCgBgBgCIgDgFIgEgFYgBgCgBgCgBgCYgEgIgCgKgDgJIgCgPYgBgFAAgFAAgGYAAgFAAgGAAgFYABgFAAgGAAgFYACgLABgKACgKYACgKACgJACgJYADgIACgIACgHYACgHACgGACgFYADgKACgGAAAAYACgEgDgFgEgBYgDgCgEACgCAD");
	this.shape_76.setTransform(-51.2,-25.8,1,1,0,0,0,-1.7,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70}]}).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},3).to({state:[{t:this.shape_73}]},3).to({state:[{t:this.shape_74}]},3).to({state:[{t:this.shape_75}]},3).to({state:[{t:this.shape_76}]},2).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_70}]},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-58.4,156.6,116.7);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2277BA").s().p("AgyA0QgWgWAAgeQAAgdAWgWQAVgVAdAAQAeAAAVAVQAWAWAAAdQAAAegWAWQgVAVgeAAQgdAAgVgVg");
	this.shape.setTransform(140.5,25.8,0.42,0.42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AgBCOQhCgBgqg0Qgqg0ANhCQAJgpAegeQAegdApgJQAigGAeAIQAMADARAIIANAIQAJAGgBAFQAAACgEABIgQgBQgjAAgVAbQgVAcAJAjQAEARAOANQANAOASAEQAeAIAagQQAMgHAIgMIAGgJQAGgJADAAQAAAAABAAQAAAAAAAAQABABAAAAQABABAAABQADAHgEAVQgIAjgeAiIgQAQQgnAlgvAAIgBAAg");
	this.shape_1.setTransform(137.7,27.2,0.42,0.42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1D3D4").s().p("AnpTjQk7ifhamVQgVkWAGh+QABgnAFgUIAEgLQDUBBDJgVQECgbCKirQAGgHgGgHQgGgGgIAEQiZBXhfAaQhxAficgNQjMgRh4g2QixhPhNixQgZg6gChAQgChAAVg6QArhzCLhWQBFgrA9gUQAbhhAOgvQAZhSAdg6QBOicCrhwQCphvDWgbQEIgiFOA0QEvAvGHB8QAcAJAVASQAWATAKAaQAYA6gZBFQgKAbgXAQQgXAPgcAAQlmgCj4A5QmEBZAJDVQAeDDGaBMQDxAuEvgEQAUAAARALQARALAIASQAiBMAJBPQANBzgsBkQgKAYgWAQQgWAPgaACQk6AZg0AFQjBAUh1AeQknBLgHDFQgGC7GiBYQCZAgC0ANQCZAKBegIQASgBAPAJQAQAJAHARQAXAxADAhQAEAogUAsQgPAigiALQkoBeiUAjQjhA1k3AgIgeABQmMAAjjhzg");
	this.shape_2.setTransform(153.5,68.1,0.42,0.42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D6E71").s().p("AA4BGIAAhEIgBgQQgCgHgCgDQgCgDgDgDQgEgBgDAAQgTAAAAAhIAABEIgnAAIgBhUIgDgLQgCgEgEgCQgDgBgFAAIgGABQgEABgCAFQgDACgBAJQgCAHAAAJIAABEIgnAAIAAiJIAnAAIAAARQARgTAUAAQAYAAANAaQANgaAZAAQAIAAAIACQAHAEAFAFQAEAGAEALQACAJAAANIAABZg");
	this.shape_3.setTransform(200.8,151.4,0.42,0.42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D6E71").s().p("AgaBEQgNgFgJgJQgIgKgGgPQgFgNAAgQQAAgRAFgMQAGgNAIgJQAKgLAMgFQANgGANAAQAOAAANAFQAMAHAKAJQAIAJAGAOQAFANAAARQAAAQgFANQgFANgKALQgJAJgMAFQgMAGgPAAQgPAAgLgGgAgJgcQgFACgDAEIgGAKQgCAFAAAHQAAAHACAFIAGAKQAFAGADABQAFADAEgBQAEABAGgDIAIgHIAGgKQACgFAAgHQAAgGgCgGIgGgKQgDgEgFgCQgEgCgGgBQgFABgEACg");
	this.shape_4.setTransform(193.1,151.4,0.42,0.42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D6E71").s().p("AgGBEQgKgFgJgKQgIgJgGgNQgFgPAAgPQAAgQAFgNQAEgNAJgKQAJgKALgGQALgFANAAQAPAAAMAHIAAAqQgKgJgLAAQgGAAgFACQgFADgDAEQgEAFgBAGQgCAFAAAHQAAAIACAGIAEAKQAEAEAFADQAFACAGAAQALAAAKgJIAAApQgPAIgNAAQgMAAgLgFg");
	this.shape_5.setTransform(187.9,151.5,0.42,0.42);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D6E71").s().p("AgJAdQgFgCgDgFIgGgKQgCgFAAgHQAAgGACgFIAGgKQADgFAFgCQAEgCAFAAQAGAAAEACQAFACADAFIAGAKQACAFAAAGQAAAHgCAFIgGAKQgDAFgFACQgEACgGAAQgFAAgEgCg");
	this.shape_6.setTransform(184.2,153.3,0.42,0.42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D6E71").s().p("AATBGIgBhVQgBgGgDgEIgGgEQgDgCgEAAQgJAAgFAIQgGAIAAANIAABIIgnAAIAAiIIAnAAIAAARQAHgLAKgFQAHgEALAAQANAAAHAEQAJAFAGAJQAFAIACAHQACALAAAJIAABWg");
	this.shape_7.setTransform(179.8,151.4,0.42,0.42);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D6E71").s().p("AgXBlQgMgEgIgHQgIgHgFgJQgGgLgBgLIAtAAQADAOAPABQAMgBAHgIQAGgJAAgPIAAgNQgDAFgFADIgIAFIgJAEIgJABQgNgBgJgFQgKgFgIgIQgIgKgDgMQgEgLAAgRQAAgQAEgNQAEgOAIgKQAIgKAKgGQALgFAMAAQATAAANASIAAgPIAoAAIgBCVIgDAPQgDAKgFAHQgGAIgIAFQgHAGgLADQgLADgKAAQgNAAgKgEgAgHg9IgIAGQgFAGgBAEQgCAHAAAGIACAMIAFAKQAEAFAEACQAFACAFAAQAGAAAEgCQAFgDADgEIAFgKQACgFAAgHQAAgIgCgFIgFgKQgEgEgEgCQgFgCgFgBQgFABgEACg");
	this.shape_8.setTransform(173.6,152.8,0.42,0.42);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D6E71").s().p("AgTBtIAAiJIAnAAIAACJgAgIg3IgHgGIgFgJQgCgFAAgGQAAgFACgFIAFgJIAHgGIAIgCQAEAAAFACIAHAGQAEAEAAAFQACAGAAAEIgCALQAAAFgEAEIgHAGQgFACgEAAQgDAAgFgCg");
	this.shape_9.setTransform(169.3,149.8,0.42,0.42);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D6E71").s().p("AgwA6IAOgiQARAOAPAAQAEAAAEgDQADgDAAgEIAAgFIgDgDIgFgDIgIgDQgTgEgGgJQgIgIAAgQQAAgMAEgIQAEgKAGgHQAHgGAJgDQAKgEAKAAQATAAARAJIgOAgQgKgHgLAAQgGAAgDADQgCACAAAEIAAAFQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABAAIAFADIAKADQAQADAIALQAIAJAAAQQAAANgEAJQgEAKgHAGQgHAHgKAEQgJADgLAAQgYAAgVgQg");
	this.shape_10.setTransform(165.7,151.4,0.42,0.42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D6E71").s().p("AgXBFQgLgFgJgKQgJgLgFgMQgEgNAAgRQAAgQAEgOQAFgOAIgJQAIgKALgGQANgFANAAQAOAAAMAFQALAGAIAKQAHAJAFAPQAEAPAAAQIAAAGIhTAAQAAAfAXAAQANAAAHgNIAnAAQgMAvgvAAQgOAAgLgFgAgNgjQgFAGgBAKIAsAAQgDgKgFgGQgHgGgIgBQgIAAgHAHg");
	this.shape_11.setTransform(160.6,151.4,0.42,0.42);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D6E71").s().p("AgeBsQgKgFgIgLQgIgJgEgOQgFgNAAgQQAAgOAEgOQAGgOAGgIQAIgLAKgFQAKgGANAAQAUAAAOASIAAhjIAoAAIAADeIgoAAIAAgPQgNAUgVAAQgMAAgKgGgAgIAMQgEACgEAEIgFAKQgCAFAAAHQAAAIACAEQACAHADAEQAEAEAEACQAFADAEAAQAFAAAFgDQAEgBAFgFIAFgKIACgMIgCgNIgFgKQgEgEgFgCQgDgDgHAAQgEAAgFADg");
	this.shape_12.setTransform(154.5,149.8,0.42,0.42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6D6E71").s().p("AgFBEQgLgEgJgLQgIgJgGgNQgFgPAAgPQAAgOAFgPQAEgNAJgKQAKgLAKgFQAMgFAMAAQAPAAAMAHIAAAqQgJgJgMAAQgGAAgFACIgIAHQgEAFgBAGQgCAFAAAHQAAAIACAGQABAGAEAEQACAEAGADQAFACAGAAQALAAAKgJIAAApQgPAIgNAAQgMAAgKgFg");
	this.shape_13.setTransform(149.3,151.5,0.42,0.42);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D6E71").s().p("AgfBEQgLgGgHgKQgIgLgEgMQgEgMAAgRQAAgQAEgMQAEgNAIgKQAIgKAKgFQAKgGANAAQAUAAAOASIAAgOIAoAAIAACJIgoAAIAAgQQgNAUgVAAQgMAAgLgFgAgIgcQgFACgDAFIgGAKQgCAHAAAEQAAAFACAHQADAHADADIAIAHQAGACADAAQAEAAAGgCIAIgHQADgDADgHQACgFAAgHQAAgGgCgFIgGgKQgDgFgFgCQgEgCgGAAQgFAAgEACg");
	this.shape_14.setTransform(143.9,151.5,0.42,0.42);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6D6E71").s().p("AgfBEQgKgHgIgJQgIgLgEgMQgEgPAAgOQAAgNAEgPQAGgPAGgIQAIgKAKgFQAKgGANAAQAUAAAOASIAAgOIAoAAIAACJIgoAAIAAgQQgNAUgVAAQgMAAgLgFgAgIgcQgFACgDAFIgGAKQgCAHAAAEQAAAFACAHIAGAKQAFAFADACQAFACAEAAQAFAAAFgCQAFgDADgEQADgDADgHQACgFAAgHQAAgGgCgFIgGgKQgCgEgGgDQgDgCgHAAQgFAAgEACg");
	this.shape_15.setTransform(137.6,151.5,0.42,0.42);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6D6E71").s().p("AgwA6IAOgiQASAOAOAAQAEAAAEgDQAEgDAAgEIgBgFIgDgDIgEgDIgIgDQgTgEgHgJQgIgIAAgQQAAgKADgKQAEgKAHgHQAGgFAKgEQAKgEAKAAQASAAASAJIgOAgQgKgHgLAAQgGAAgDADQgDACAAAEIABAFIACACIAFADIAJADQARADAIALQAJAKgBAPQAAALgDALQgEAJgIAHQgIAHgJAEQgIADgMAAQgXAAgWgQg");
	this.shape_16.setTransform(132.3,151.4,0.42,0.42);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6D6E71").s().p("AgTBtIAAiJIAnAAIAACJgAgIg3IgHgGQgEgEgBgFQgBgFAAgGQAAgFABgFQABgFAEgEIAHgGQAFgCADAAIAJACIAHAGIAFAJQABAFAAAFQAAAGgBAFIgFAJIgHAGQgFACgEAAQgEAAgEgCg");
	this.shape_17.setTransform(128.7,149.8,0.42,0.42);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6D6E71").s().p("AgYBaIAAhhIgNAAIAAgoIANAAIAAgpIAnAAIAAApIAXAAIAAAoIgXAAIAABhg");
	this.shape_18.setTransform(125.8,150.6,0.42,0.42);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6D6E71").s().p("AgYBaIAAhhIgNAAIAAgoIANAAIAAgpIAnAAIAAApIAXAAIAAAoIgXAAIAABhg");
	this.shape_19.setTransform(122.3,150.6,0.42,0.42);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6D6E71").s().p("AgaBEQgNgGgJgIQgJgLgEgOQgGgOAAgPQAAgPAGgOQADgLAKgLQAKgLAMgFQAMgGAOAAQANAAAOAFQANAHAIAJQAKAKAFANQAFAOAAAQQAAAPgFAOQgGAOgJAKQgJAJgMAFQgLAGgQAAQgQAAgKgGgAgJgcQgFADgDADQgEAGgCAEQgBAFAAAHQAAAHABAFQACAGAEAEQAEAFAEACQAFADAEgBQAFABAFgDQAFgCADgFQADgDACgHQACgFAAgHQAAgGgCgGIgFgKQgCgDgGgDQgDgCgHgBQgFABgEACg");
	this.shape_20.setTransform(117.4,151.4,0.42,0.42);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6D6E71").s().p("AgSBtIAAiJIAmAAIAACJgAgHg3IgIgGQgDgEgBgFIgDgLQAAgEADgGQABgFADgEIAIgGQAEgCADAAIAJACIAHAGIAFAJQABAFAAAFQAAAGgBAFIgFAJIgHAGQgFACgEAAQgEAAgDgCg");
	this.shape_21.setTransform(113,149.8,0.42,0.42);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6D6E71").s().p("AgTBwIAAjfIAnAAIAADfg");
	this.shape_22.setTransform(110.4,149.7,0.42,0.42);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6D6E71").s().p("AgTBwIAAjfIAnAAIAADfg");
	this.shape_23.setTransform(107.7,149.7,0.42,0.42);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6D6E71").s().p("AgXBFQgLgFgJgKQgKgLgDgMQgFgNAAgRQAAgQAFgOQAEgOAIgJQAIgKALgGQANgFAMAAQAOAAANAFQALAGAIAKQAHAJAFAPQAEAPAAAQIAAAGIhTAAQAAAfAXAAQANAAAHgNIAnAAQgNAvguAAQgNAAgMgFgAgNgjQgFAGgBAKIAsAAQgDgKgFgGQgHgGgIgBQgIAAgHAHg");
	this.shape_24.setTransform(103.6,151.4,0.42,0.42);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A7A9AC").s().p("AgOCCQgYgJgVgTQgUgTgLgZQgMgZAAgfQAAgeAMgaQAKgZAUgUQATgSAagLQAagLAeAAQAiAAAcAPIAABPQgZgQgXAAQgNAAgMAEQgKAEgKAJQgIAJgEALQgFAKAAAPQAAAPAFAKQADALAJAJQAIAIAMAGQAMAEANAAQAZAAAXgSIAABPQgjAOgdAAQgdABgYgKg");
	this.shape_25.setTransform(200.5,137.7,0.42,0.42);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A7A9AC").s().p("AhHCBQgYgLgRgTQgSgRgKgbQgKgaAAgdQAAgcAKgZQAJgZASgUQARgTAYgKQAWgMAeAAQAvAAAgAjIAAgbIBcAAIAAEHIhcAAIAAgeQgdAlgxAAQgcABgYgLgAgTg2QgLAFgIAIQgIAIgEAKQgFALAAAMQAAAMAFALQAEALAIAJQAHAHAMAFQALAFALAAQALAAAMgFQAMgFAHgHQAIgKAEgJQAFgLAAgNQAAgLgFgLQgDgKgJgJQgIgIgLgFQgLgFgMAAQgMAAgKAFg");
	this.shape_26.setTransform(189.2,137.7,0.42,0.42);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A7A9AC").s().p("AhHCBQgZgLgQgTQgSgRgKgbQgKgaAAgdQAAgcAKgZQAJgZASgUQARgTAYgKQAWgMAeAAQAvAAAgAjIAAgbIBcAAIAAEHIhcAAIAAgeQgdAlgxAAQgcABgYgLgAgTg2QgLAEgIAJQgIAIgEAKQgFALAAAMQAAAMAFALQAEALAIAJQAIAHALAFQALAFALAAQALAAAMgFQAMgFAHgHQAIgKAEgJQAFgLAAgNQAAgLgFgLQgDgKgJgJQgIgIgLgFQgLgFgMAAQgMAAgKAFg");
	this.shape_27.setTransform(175.8,137.7,0.42,0.42);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A7A9AC").s().p("AhwBvIAhhCQAmAbAiAAQAMAAAIgGQAIgFAAgJQAAgEgBgEQgBgDgEgEQgFgCgHgCQgKgEgKgBQgqgKgRgRQgQgPAAgfQAAgWAHgSQAJgSAPgMQAQgMAUgHQAVgGAaAAQArAAAoARIgfA9QgZgOgYAAQgNAAgIAFQgGAFAAAJIABAHQABAEADACQAFACAIACIAWAFQAmAIASAUQATASAAAgQAAAWgJATQgJASgQANQgQAMgXAIQgWAGgbAAQg0AAgzgeg");
	this.shape_28.setTransform(164.6,137.7,0.42,0.42);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A7A9AC").s().p("AgwDBIAAmBIBhAAIAAGBg");
	this.shape_29.setTransform(156.9,135.1,0.42,0.42);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2277BA").s().p("Ag4CrIAAi5IgeAAIAAhNIAeAAIAAhPIBbAAIAABPIA0AAIAABNIg0AAIAAC5g");
	this.shape_30.setTransform(150.8,136.1,0.42,0.42);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2277BA").s().p("Ag3CrIAAi5IgfAAIAAhNIAfAAIAAhPIBaAAIAABPIA0AAIAABNIg0AAIAAC5g");
	this.shape_31.setTransform(143.8,136.1,0.42,0.42);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2277BA").s().p("Ag+CDQgcgLgUgSQgVgUgLgaQgMgZAAggQAAgdAMgaQALgZAVgTQAUgSAdgMQAcgKAhAAQAhAAAdAKQAdALAUATQAVASAMAaQALAZAAAfQAAAegLAbQgMAagVATQgUASgeALQgbAKgiAAQgjAAgbgKgAgWg3QgLAFgHAIQgIAHgFALQgFALAAANQAAANAFAKQAFALAIAJQAHAHALAFQAMAFAKAAQALAAAMgFQAMgFAHgHQAIgJAEgLQAFgKAAgNQAAgMgFgLQgEgLgIgIQgIgIgLgFQgLgEgMgBQgLABgLAEg");
	this.shape_32.setTransform(133.6,137.7,0.42,0.42);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2277BA").s().p("AgsDQIAAkGIBaAAIAAEGgAgThrQgKgEgGgHQgHgGgEgKQgEgJAAgMQAAgMAEgIQAEgKAHgGQAGgHAKgFQAKgEAJAAQAKAAAKAEQAKAFAGAHQAIAHADAJQAEAIAAAMQAAAMgEAJQgDAJgIAHQgGAHgKAEQgKAEgKAAQgJAAgKgEg");
	this.shape_33.setTransform(124.4,134.5,0.42,0.42);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2277BA").s().p("AgsDVIAAmpIBZAAIAAGpg");
	this.shape_34.setTransform(119.4,134.3,0.42,0.42);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2277BA").s().p("AgtDVIAAmpIBaAAIAAGpg");
	this.shape_35.setTransform(114.4,134.3,0.42,0.42);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2277BA").s().p("AhrDBIAAmBIDXAAIAABVIh0AAIAABBIBtAAIAABUIhtAAIAABCIB0AAIAABVg");
	this.shape_36.setTransform(106.8,135.1,0.42,0.42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Trees
	this.instance = new lib.Trees();
	this.instance.parent = this;
	this.instance.setTransform(162.1,344,1,1,0,0,0,162.1,344);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Clouds
	this.instance_1 = new lib.Clouds();
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.7,309.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Sky
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#70C6CE").ss(1,1,1).p("A3b/PMAu3AAAMAAAA+fMgu3AAAg");
	this.shape_37.setTransform(150,200.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#56CCFF","#E7F7FF"],[0,1],0,-199.9,0,200).s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape_38.setTransform(150,200.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-9.6,-0.9,342.9,402), null);


// stage content:
(lib.erniegame3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function Ernie()
		{
		  this.mc = exportRoot.ernie;
		  this.initY = this.mc.y;
		  this.state = Ernie.DEAD;
		  this.velocity = 0;
		  this.setupCollisionPoints();
		}
		Ernie.ALIVE = 0;
		Ernie.DYING = 1;
		Ernie.DEAD  = 2;
		
		Ernie.prototype.isAlive = function()
		{
		  return (this.state == Ernie.ALIVE);
		}
		
		Ernie.prototype.isDead = function()
		{
		  return (this.state == Ernie.DEAD);
		}
		  
		
		Ernie.prototype.startRunning = function()
		{
		  console.log("Ernie::startRunning()");
		  this.state = Ernie.ALIVE;
		  this.mc.y = this.initY;
		  //this.mc.play();
		  this.velocity = 0;
		  this.jump();
		}
		
		Ernie.prototype.jump = function()
		{
		  if (this.state == Ernie.ALIVE && this.mc.y >= -2)
		  {
		    this.velocity = Main.Jump_Force;
			createjs.Sound.play("flap");
		  }
		}
		
		
		Ernie.prototype.update = function()
		{
		  console.log("Ernie::update()");
		  if (this.state == Ernie.ALIVE || this.state == Ernie.DYING)
		  {
		    this.updateVelocity();
		  }
		}
		
		Ernie.prototype.updateVelocity = function()
		{
		  this.velocity += Main.GRAVITY;
		
		  if (this.velocity > Main.MAX_VELOCITY)
		  {
		    this.velocity = Main.MAX_VELOCITY;
		  }
		
		  this.mc.y += this.velocity;
		}
		
		Ernie.prototype.setupCollisionPoints = function()
		{
		  this.collisionPoints = [this.mc.hit1, this.mc.hit2, this.mc.hit3,
		                          this.mc.hit4, this.mc.hit5, this.mc.hit6,
		                          this.mc.hit7, this.mc.hit8, this.mc.hit9];
		
		  for (var i = 0; i < this.collisionPoints.length; i++)
		  {
		    this.collisionPoints[i].visible = false;
		  }
		}
		
		Ernie.prototype.hitTest = function(target)
		{
		  for (var i = 0; i < this.collisionPoints.length; i++)
		  {
		    var pt = this.collisionPoints[i].localToLocal(0, 0, target);
		    var collision = target.hitTest(pt.x, pt.y);
		    if (collision == true)
		    {
		      return true;
		    }
		  }
		
		  return false;
		}
		
		Ernie.prototype.hitGround = function()
		{
		  this.state = Ernie.ALIVE;
		  this.velocity = Main.MIN_VELOCITY;
		
		}
		
		Ernie.prototype.fallFromSky = function()
		{
		  if (this.state == Ernie.ALIVE)
		  {
		    this.state = Ernie.DYING;
		    this.velocity = 0;
			//createjs.Sound.play("hit");
			//while (this.velocity <= 0) {this.state = Ernie.DEAD}
			window.addEventListener("keypress", (e) => {console.log("new game"); location.reload();})
		}
		  }
		  
		Ernie.prototype.getPosition = function()
		{
		  return {x: this.mc.x, y: this.mc.y};
		}
		function Pipes()
		{
		  this.scrolling = false;
		  this.distanceBetweenPipes = exportRoot.pipe1.x - exportRoot.pipe0.x;
		  this.leftBound = -exportRoot.pipe0.nominalBounds.width;
			
		  this.maxPipeY = exportRoot.pipe0.y;
		  this.minPipeY = exportRoot.pipe2.y;
			
		  this.setupStartPosition();
		}
		
		Pipes.prototype.startScrolling = function()
		{
		  this.scrolling = true;
		  this.setupStartPosition();
		  this.approachingPipe = this.pipes[0];
		}
		
		Pipes.prototype.stopScrolling = function()
		{
		  this.scrolling = false;
		}
		
		Pipes.prototype.update = function()
		{
		  if (this.scrolling == true)
		  {
		    //console.log("Pipes::update() scrolling");
			this.updatePipePositions();
		    this.checkLeftPipeIsOutsideScreen();
		  }
		}
		
		Pipes.prototype.updatePipePositions = function()
		{
		  for (var i = 0; i < this.pipes.length; i++)
		  {
		    var pipe = this.pipes[i];
		    pipe.x -= Main.SCROLL_SPEED;
		  }
		}
		
		Pipes.prototype.checkLeftPipeIsOutsideScreen = function()
		{
		  var leftMostPipe = this.pipes[0];
		  var rightMostPipe = this.pipes[2];
		  if (leftMostPipe.x < this.leftBound)
		  {
		    leftMostPipe.x = rightMostPipe.x + this.distanceBetweenPipes;
			this.setRandomYPosition(leftMostPipe);
		    this.pipes.shift();
		    this.pipes.push(leftMostPipe);
		  }
		}
		
		Pipes.prototype.setRandomYPosition = function(pipe)
		{
		  var delta = this.minPipeY - this.maxPipeY;
		  pipe.y = this.maxPipeY + Math.round(Math.random() * delta);
		}
		
		Pipes.prototype.setupStartPosition = function()
		{
		  this.pipes = [exportRoot.pipe0, exportRoot.pipe1, exportRoot.pipe2];
		
		  for (var i = 0; i < this.pipes.length; i++)
		  {
		    var pipe = this.pipes[i];
		    pipe.x = (lib.properties.width * 1.5) + (i * this.distanceBetweenPipes);
		    this.setRandomYPosition(pipe);
		  }
		}
		
		Pipes.prototype.isErnieTouchingAPipe = function(ernie)
		{
		  for (var i = 0; i < this.pipes.length; i++)
		  {
		    if (ernie.hitTest(this.pipes[i]))
		    {
		      return true;
		    }
		  }
		  
		  return false;
		}
		
		Pipes.prototype.setNextApproachingPipe = function()
		{
		  for (var i = 0; i < this.pipes.length; i++)
		  {
		    if (this.pipes[i] == this.approachingPipe)
		    {
		      this.approachingPipe = this.pipes[i + 1];
		      return;
		    }
		  }
		}
		
		Pipes.prototype.hasErniePassedApproachingPipe = function(ernie)
		{
		  var ernieXPosition = ernie.getPosition().x;
		  if (ernieXPosition > this.approachingPipe.x)
		  {
		    return true;
		  }
		
		  return false;
		}
		function Ground()
		{
		this.scrolling = false;
		this.slices = [exportRoot.ground0, exportRoot.ground1, exportRoot.ground2];
		this.sliceWidth = exportRoot.ground1.x - exportRoot.ground0.x;
		this.leftBound = exportRoot.ground0.x - this.sliceWidth;
		}
		Ground.prototype.update = function()
		{
		  if (this.scrolling == true){
		    //console.log("Ground::update() scrolling");
			this.updateSlicePositions();
			this.checkLeftSliceIsOutsideScreen();
		  }
		}
		
		Ground.prototype.startScrolling = function()
		{
		  this.scrolling = true;
		}
		
		Ground.prototype.stopScrolling = function()
		{
		  this.scrolling = false;
		}
		
		Ground.prototype.updateSlicePositions = function()
		{
		  for (var i = 0; i < this.slices.length; i++)
		  {
		    var slice = this.slices[i];
		    slice.x -= Main.SCROLL_SPEED;
		  }
		}
		
		Ground.prototype.checkLeftSliceIsOutsideScreen = function()
		{
		  var firstSlice = this.slices[0];
		  var lastSlice = this.slices[2];
		  if (firstSlice.x < this.leftBound)
		  {
		    firstSlice.x = lastSlice.x + this.sliceWidth;
		    this.slices.shift();
		    this.slices.push(firstSlice);
		  }
		}
		
		Ground.prototype.isErnieTouchingGround = function(ernie)
		{
		  for (var i = 0; i < this.slices.length; i++)
		  {
		    if (ernie.hitTest(this.slices[i]))
		    {
		      return true;
		    }
		  }
		
		  return false;
		}
		function UI()
		{ 
		  this.gameOverPrompt = exportRoot.gameOver;
		  this.getReadyPrompt = exportRoot.getReady;
		  this.startInstructions = exportRoot.startInstructions;
		  this.screenFlash = exportRoot.screenFlash;
		  this.getReady();
		}
		
		UI.prototype.updateScore = function(score)
		{
		  document.getElementById("scoreOutPut").innerHTML = score;
		}
		
		UI.prototype.gameStart = function()
		{
		  this.gameOverPrompt.visible = false;
		  this.getReadyPrompt.visible = false;
		  this.startInstructions.visible = false;
		  this.screenFlash.visible = false;
		  this.updateScore(0);
			
		}
		
		UI.prototype.getReady = function()
		{
		  this.gameOverPrompt.visible = false;
		  this.getReadyPrompt.visible = true;
		  this.startInstructions.visible = true;
		  this.screenFlash.visible = false;
		}
		
		UI.prototype.gameOver = function()
		{
		  this.gameOverPrompt.visible = true;
		  this.getReadyPrompt.visible = false;
		  this.startInstructions.visible = true;
		}
		
		UI.prototype.triggerScreenFlash = function()
		{
		  this.screenFlash.visible = true;
		  this.screenFlash.alpha = 1;
		  createjs.Tween.get(this.screenFlash).to({alpha:0}, 100);
		}
		function Main(){
		 this.ground = new Ground();
		 this.pipes = new Pipes();
		 this.ernie = new Ernie();
		 this.ui = new UI();
			
		 this.score = 0;
			
		 this.registerSound();
			
		createjs.Ticker.addEventListener("tick", this.update.bind(this));
			
		canvas.onmousedown = this.userPressed.bind(this);
		window.onkeydown = this.userPressed.bind(this);	
		}
		
		Main.SCROLL_SPEED = 3.0;
		Main.GRAVITY = 0.42;
		Main.Jump_Force = -7.22;
		Main.MAX_VELOCITY = 18;
		Main.MIN_VELOCITY = -1;
		
		Main.prototype.update = function(evt)
		{
		  this.ernie.update();
		  this.ground.update();
		  this.pipes.update();
			
		  this.checkForErnieCollidingWithGround();
		  this.checkForErnieCollidingWithPipes();
		  this.checkForErniePassingPipe();
		}
		
		Main.prototype.userPressed = function(evt)
		{
		if (this.ernie.isDead())
		  {
		this.startGame();
		 }
		  else
		  {
		    this.ernie.jump();
		  }
		console.log("PRESS");
		}
		
		Main.prototype.startGame = function()
		{
		  this.score = 0;
			
		  this.ground.startScrolling();
		  this.pipes.startScrolling();
		  this.ernie.startRunning();
		  this.ui.gameStart();
		}
		
		Main.prototype.ernieHitGround = function()
		{
		  this.ernie.hitGround();
		}
		
		Main.prototype.ernieHitPipe = function()
		{
		  this.ernie.fallFromSky();
		  this.ground.stopScrolling();
		  this.pipes.stopScrolling();
		  this.ui.gameOver();
		  this.ui.triggerScreenFlash();
		}
		
		
		Main.prototype.checkForErnieCollidingWithGround = function()
		{
		  if (this.ernie.isDead() == false)
		  {
		    if (this.ground.isErnieTouchingGround(this.ernie))
		    {
		      this.ernieHitGround();
		    }
		  }
		}
		
		
		Main.prototype.checkForErnieCollidingWithPipes = function()
		{
		  if (this.ernie.isAlive())
		  {
		    if (this.pipes.isErnieTouchingAPipe(this.ernie))
		    {
		      this.ernieHitPipe();
		    }
		  }
		}
		
		Main.prototype.checkForErniePassingPipe = function()
		{
		 var scoreMsg = 0;
		  if (this.ernie.isAlive())
		  {
		    if (this.pipes.hasErniePassedApproachingPipe(this.ernie))
		    {
		      this.pipes.setNextApproachingPipe();
		      console.log("Main::checkForErniePassingPipe() - Scored a point!");
			  this.scoredPoint();
			  scoreMsg += 1;
			  document.querySelector("#scorebox").innerHTML = parseInt(document.querySelector("#scorebox").innerHTML) + 1;
			  createjs.Sound.play("point");
		    }
		  }
		}
		
		Main.prototype.scoredPoint = function()
		{
		  this.score++;
		//   document.getElementById("scoreOutPut").innerHTML = this.score;
		//   this.ui.updateScore(this.score);
		//   createjs.Sound.play("point");
		  console.log(this.score);
		//   document.querySelector("#scorebox").innerHTML = this.score;
		}
		
		Main.prototype.registerSound = function()
		{
		  createjs.Sound.registerSound("sound/point.wav", "point");
		  createjs.Sound.registerSound("sound/flap.wav", "flap");
		   createjs.Sound.registerSound("sound/hit.wav", "hit");
		}
		
		var main = new Main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// start instr
	this.startInstructions = new lib.StartInstructions();
	this.startInstructions.name = "startInstructions";
	this.startInstructions.parent = this;
	this.startInstructions.setTransform(163.5,246.6,1,1,0,0,0,-47.5,3.6);
	this.startInstructions.cache(-127,-8,159,23);

	this.timeline.addTween(cjs.Tween.get(this.startInstructions).wait(1));

	// get ready
	this.getReady = new lib.GetReady();
	this.getReady.name = "getReady";
	this.getReady.parent = this;
	this.getReady.setTransform(166.9,98.2,1,1,0,0,0,-1.1,12.2);
	this.getReady.cache(-109,-8,215,41);

	this.timeline.addTween(cjs.Tween.get(this.getReady).wait(1));

	// game over
	this.gameOver = new lib.GameOver();
	this.gameOver.name = "gameOver";
	this.gameOver.parent = this;
	this.gameOver.setTransform(164.8,98.3,1,1,0,0,0,-1.2,12.3);
	this.gameOver.cache(-111,-9,220,42);

	this.timeline.addTween(cjs.Tween.get(this.gameOver).wait(1));


	// flash
	this.screenFlash = new lib.screenflash();
	this.screenFlash.name = "screenFlash";
	this.screenFlash.parent = this;
	this.screenFlash.setTransform(150,200);
	this.screenFlash.cache(-152,-202,304,404);

	this.timeline.addTween(cjs.Tween.get(this.screenFlash).wait(1));

	// ernie
	this.ernie = new lib.ernie();
	this.ernie.name = "ernie";
	this.ernie.parent = this;
	this.ernie.setTransform(59.3,312,0.75,0.75,0,0,0,16.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.ernie).wait(1));

	// ground
	this.ground2 = new lib.GroundSlice();
	this.ground2.name = "ground2";
	this.ground2.parent = this;
	this.ground2.setTransform(470.5,375.8,1,1,0,0,0,96.5,24.8);
	this.ground2.cache(-10,-10,212,70);

	this.ground1 = new lib.GroundSlice();
	this.ground1.name = "ground1";
	this.ground1.parent = this;
	this.ground1.setTransform(283.5,375.8,1,1,0,0,0,96.5,24.8);
	this.ground1.cache(-10,-10,212,70);

	this.ground0 = new lib.GroundSlice();
	this.ground0.name = "ground0";
	this.ground0.parent = this;
	this.ground0.setTransform(96.5,375.8,1,1,0,0,0,96.5,24.8);
	this.ground0.cache(-10,-10,212,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ground0},{t:this.ground1},{t:this.ground2}]}).wait(1));

	// pipes
	this.pipe2 = new lib.Pipe();
	this.pipe2.name = "pipe2";
	this.pipe2.parent = this;
	this.pipe2.setTransform(439.2,250,1,1,0,0,0,26.2,0);
	this.pipe2.cache(-6,-326,64,583);

	this.pipe1 = new lib.Pipe();
	this.pipe1.name = "pipe1";
	this.pipe1.parent = this;
	this.pipe1.setTransform(149.2,200,1,1,0,0,0,26.2,0);
	this.pipe1.cache(-6,-326,64,583);

	this.pipe0 = new lib.Pipe();
	this.pipe0.name = "pipe0";
	this.pipe0.parent = this;
	this.pipe0.setTransform(-140.8,107,1,1,0,0,0,26.2,0);
	this.pipe0.cache(-6,-326,64,583);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pipe0},{t:this.pipe1},{t:this.pipe2}]}).wait(1));

	// bg
	this.instance = new lib.Background();
	this.instance.parent = this;
	this.instance.setTransform(161.8,200.1,1,1,0,0,0,161.8,200.1);
	this.instance.cache(-12,-3,347,406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-17.4,737.8,721.8);
// library properties:
lib.properties = {
	id: 'F82A4A5C259F4DB493B6AE5396226E4A',
	width: 300,
	height: 400,
	fps: 60,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F82A4A5C259F4DB493B6AE5396226E4A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;