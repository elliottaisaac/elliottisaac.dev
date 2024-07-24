// (function (cjs, an) {

// var p; // shortcut to reference prototypes
// var lib={};var ss={};var img={};
// lib.ssMetadata = [];


// // symbols:
// // helper functions:

// function mc_symbol_clone() {
// 	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
// 	clone.gotoAndStop(this.currentFrame);
// 	clone.paused = this.paused;
// 	clone.framerate = this.framerate;
// 	return clone;
// }

// function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
// 	var prototype = cjs.extend(symbol, cjs.MovieClip);
// 	prototype.clone = mc_symbol_clone;
// 	prototype.nominalBounds = nominalBounds;
// 	prototype.frameBounds = frameBounds;
// 	return prototype;
// 	}


// (lib.LowerPipe = function(mode,startPosition,loop) {
// 	this.initialize(mode,startPosition,loop,{});

// 	// Layer_2
// 	this.shape = new cjs.Shape();
// 	this.shape.graphics.f("#FFFFFF").s().p("Ai4MRQhUgLhHgxQgvgggjgtIgWgGQg2gNgogUQgrgVgjggQgUACgVAAQhwgBhYg8Qg3glglg2QgLgQgKgRIgZgIQguAYg2gHQg3gGgngiQghgcgPgqIgCgBQgbAFgdgEQg3gGgngiQgngigOg1QgOg1ARgxQAVg9A/ghQASgJASgFIAEgGQAjg5A5geQAhgSAlgHQA4hKBcgoQBUgkBVAHQAMhFAmg7QA6hZBngsQBngsBoAUQA7ALAzAeQAZgPAcgMQBAgbBAgDQAshCBIgrQBXg0BiAAQBhABBXA1QBXA2AtBWQATAlAKAoQAfAAAfAGQBoAUBQBPQAWAWASAYQBIABBDAeQA6gbA6AQQAyAOAkAqQARAVAKAWQAPAHAOAIQASALAQAOQAqgLAqAMQAyAOAkAqQAjAqAFA0QAGAzgaAvQgaAxguAYQgnAUgtgBQgbAigmAXQgvAeg2AHQgSACgSAAQgyA5hLAgQheAphhgNIgEAAIgNATQg4BQheApQgpASgpAHQglA0g2AkQhYA6hwAAQgjAAgggGQg3BFhVAlQhGAfhJAAQgYAAgXgEg");
// 	this.shape.setTransform(-32.8,64.7);

// 	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

// }).prototype = getMCSymbolPrototype(lib.LowerPipe, new cjs.Rectangle(-177.6,-14.1,289.7,157.7), null);


// (lib.GroundSlice = function(mode,startPosition,loop) {
// 	this.initialize(mode,startPosition,loop,{});

// 	// grass
// 	this.shape = new cjs.Shape();
// 	this.shape.graphics.f("#00CC66").s().p("AvEAbIAAhPIeJAAIAABPQgcApgYgpIgTAKIgQgKQgQAVgVgVQgbAfgcgfQgdAcgdgcIgUAAQgcAogfgoQgWATgVgTQgYAogogoQghAngdgfIgGgIQgPATgPgTIgcAPIgXgPQgrAjgpgjQgaAlgcglQgVAfgVgfQgxAlgwglQgMAXgMgXQgRAYgSgYQgfAxgfgxQgRAsgdgsIgaAAQgUATgUgTQgaAggfggQgYAUgZgUQgMATgNgTQgfAtgggtQgXAUgXgUQgcAfgcgfQgvAihBgiQgVAqgVgqQgpAqgogqQgdAlgdglQgUAbgUgbQgvAkgygkQgDAHgEACQgJAGgIgPQgRAYgRgYQgTAZgQAAQgQAAgMgZg");
// 	this.shape.setTransform(96.5,8.4);

// 	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

// 	// grass shadow
// 	this.shape_1 = new cjs.Shape();
// 	this.shape_1.graphics.f("#009966").s().p("AvEAcIAAhPIeJAAIAABPQgcApgYgpIgTAKIgQgKQgQAUgVgUQgbAegcgeQgdAbgdgbIgUAAQgcAogfgoQgWASgVgSQgYAngognQghAmgdgfIgGgHQgPASgPgSIgcAOIgXgOQgrAigpgiQgaAkgcgkQgVAegVgeQgxAjgwgjQgMAWgMgWQgRAXgSgXQgfAwgfgwQgRArgdgrIgaAAQgUASgUgSQgaAfgfgfQgYATgZgTQgMARgNgRQgfAsgggsQgXASgXgSQgcAegcgeQgvAghBggQgVAqgVgqQgpApgogpQgdAkgdgkQgUAagUgaQgvAigygiQgDAGgEADQgJAGgIgPQgRAXgRgXQgTAYgQAAQgQAAgMgYg");
// 	this.shape_1.setTransform(96.5,10.4);

// 	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

// 	// top grass
// 	this.shape_2 = new cjs.Shape();
// 	this.shape_2.graphics.f("#33FF66").s().p("AvEAKIAAgTIAHAAIAAABIeCAAIAAASg");
// 	this.shape_2.setTransform(96.5,2.4);

// 	this.shape_3 = new cjs.Shape();
// 	this.shape_3.graphics.f("#339966").s().p("Au9AKIAAgBIgHAAIAAgSIeJAAIAAATg");
// 	this.shape_3.setTransform(96.5,0.5);

// 	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

// 	// dirt shadow
// 	this.shape_4 = new cjs.Shape();
// 	this.shape_4.graphics.f("#663333").s().p("AvEAcIAAhPIeJAAIAABPQgcApgYgpIgTAKIgQgKQgQAUgVgUQgbAegcgeQgdAbgdgbIgUAAQgcAogfgoQgWASgVgSQgYAngognQghAmgdgeIgGgIQgPASgPgSIgcAOIgXgOQgrAigpgiQgaAkgcgkQgVAegVgeQgxAjgwgjQgMAWgMgWQgRAXgSgXQgfAwgfgwQgRArgdgrIgaAAQgUASgUgSQgaAfgfgfQgYATgZgTQgMARgNgRQgfAsgggsQgXASgXgSQgcAdgcgdQgvAghBggQgVAqgVgqQgpApgogpQgdAkgdgkQgUAagUgaQgvAigygiQgDAGgEADQgJAFgIgOQgRAXgRgXQgTAYgQAAQgQAAgMgYg");
// 	this.shape_4.setTransform(96.5,12.3);

// 	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

// 	// dirt
// 	this.shape_5 = new cjs.Shape();
// 	this.shape_5.graphics.f("#996666").s().p("AvED9IAAn5IeJAAIAAH5g");
// 	this.shape_5.setTransform(96.5,24.8);

// 	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

// }).prototype = getMCSymbolPrototype(lib.GroundSlice, new cjs.Rectangle(-8,-8,208,65.8), null);


// (lib.Trees = function(mode,startPosition,loop) {
// 	this.initialize(mode,startPosition,loop,{});

// 	// Front
// 	this.shape = new cjs.Shape();
// 	this.shape.graphics.f("#1CD241").s().p("AiPEwIgJgIQgqATgxAAQhaAAhAg+QgvAqhAAAQg6AAgrgiQgyAig/AAQhIAAg2grQgcAIgfAAQgpAAgkgOQgnAXgxAAQhIAAg0gzQgWgWgNgaIgLAAIgFAAQgUApgiAjQhPBPhwAAQhwAAhPhPQgPgQgNgQIAApOQAcgIAgAAQBaAABBBBQAwAwAMA/QBBANA0AsQAjgSAqAAQBGAAAyAxQATAUAMAXQAJgCAKAAIAKABIAKgLQA8g8BVAAQBIAAA2ArQAbgIAgAAQBVAAA7A8IAQASQAZgIAdAAQAkAAAgANIAMgIQALgPAOgOQBDhCBdAAQBCAAA0AiQBLhABkAAQByAABRBQIADAEQA4goBHAAQBYAABAA9QAfgOAlAAQBGAAAyAxQAOAOALAQQARguAmgnQBGhGBkAAQBjAABGBGQAZAaARAdQAJgQAOgOQAygyBGAAQBGAAAyAyQATATAMAXIAFgCIgBgPQAAhhBFhFQBFhEBhAAIADAAIAAHTIgDAAIgcgBQgMAlgeAdQgyAzhGAAQhGAAgzgzQgTgTgLgWQgXAGgaAAQhGAAgygyIgJgKQgSAvgmAmQhGBGhjAAQhkAAhGhGQgkgkgRgrQgLATgQAQQgyAxhGAAQgiAAgcgLIgCACQhBBBhbAAQhAAAgzggIgPAQQhRBRhyAAQhxAAhQhRg");
// 	this.shape.setTransform(162.1,352.6);

// 	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

// 	// Middle
// 	this.shape_1 = new cjs.Shape();
// 	this.shape_1.graphics.f("#5BE7AB").s().p("AN8EcQgXgXgOgaIgLAMQgqAqg6AAQg8AAgqgqQgcgcgKgkQggAhgvAAQgvAAghgiQgIgIgFgIQgNAUgSASQg2A3hOAAQhNAAg4g3QgbgcgNgiQgTAIgWAAQgpAAgdgdQgIgJgGgJQgLAtgiAkQgxAwhEAAQguAAgngXQgKAcgWAWQgsArg9AAQg9AAgrgrQgcgcgJghIgUAAQhMAAg1g1IgHgHIgIAIQgrArg8AAQgpAAgggTQgKAOgMALQg2A3hOAAQhOAAg2g3QgmgmgMgwQgaAIgeAAQhGAAgxgyQgygxAAhGIAAgCQgTAKgWAAQgkAAgagaQgRgSgGgWQgfAWgpAAQgfAAgagNIAAjiQAagNAfAAQA1AAAkAkQAmAlgBA1IAAAAQAPgFAQAAQAkAAAZAaQAOAOAHARIAJgKQAxgyBGAAQBHAAAxAyQAeAdAMAkQAjgQApAAQBNAAA2A1QAogjA4AAQAyAAAmAdQALgUATgRQA1g2BMAAQBLAAA2A2QA0AzACBGQAWADAUAJQALgmAegfQAxgwBEAAQBEAAAxAwQAaAbAMAgQAIgQANgOQAdgdApAAQAhAAAZASQALgPAMgOQA4g2BNAAQBOAAA2A2QAjAjANAsQAggdAsAAQAvAAAhAgQARARAIATQAFgHAHgHQAqgpA8AAQA6AAAqApIALANQAOgbAXgXQA5g4BRAAQBPAAA3A1QAZgJAcAAQATAAASAFQANguAjgjQA3g3BNAAQAnAAAgAOQAGgrAegeQAlglA0AAQAvAAAiAdIAADCQgiAcgvAAIgLAAQADAPgBAQQABBOg3A2Qg3A3hOAAQg/AAgwgkIgOAQQglAmg3AAQgMAAgKgCQgMAQgPAPQg5A5hRAAQhRAAg5g5g");
// 	this.shape_1.setTransform(162,341.7);

// 	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

// 	// Back
// 	this.shape_2 = new cjs.Shape();
// 	this.shape_2.graphics.f("#B6FFFC").s().p("AK0E0QgQgQgKgRQgoAng5AAQg6gBgpgpQgIgHgGgJQgVAFgWAAQhDAAgwgvQgbgcgLgiIgRABQg1AAgngiQgEAlgbAaQgeAfgrAAQgYAAgTgIIgDACQgRATgbAAQgbAAgTgTIgJgLQgjARgpAAQhHAAg0gzIAAgBIgEAEQgsAshAAAQg/AAgtgsQgYgZgLgeQgKAZgWAVQgmAog5AAQgsAAgjgaIgGAGQgtAvhBAAQhBAAgvgvQgMgMgIgNIgUABQg1AAglglQgkglAAg0IAAgMQgdAVgkgBQgmABgdgWQgbAbglAAQgKgBgJgCQgHAJgIAHQgqArg7AAQg8AAgpgrQgrgpAAg7IABgRQgvgBglgcIAAjkQAlgeAzgBQA7ABAqAqQAqAqABA7IgBASQA4ABApApIAJAJQAMgDANAAQASAAAQAGQAHgLAKgKQAhghAvAAQAuAAAhAhQAiAhgBAvIAAAFQAigbAtAAQAsAAAhAbQAfgRAkgBIAAgJQAAg/AsgtQAtgsA/AAQA/AAAtAsQAiAkAIAuIALAAQAoAAAbAcQAKAKAIANQAhgVAqABQA2gBApAhQAHgLAKgKQA0gyBHgBQBIABAzAyQArArAHA4QAVgLAbAAQAdAAAXANIAAgJQAAg6AqgqQArgqA7gBQA7ABAqAqQARARAKATQAUgEAWgBQBCAAAvAwQAXAUAKAaIABAAQAJgmAfgeQArgrA9AAQA9AAAsArQASATALAVQAUgJAYAAQAqAAAdAcQAFgrAhghQAngoA5ABQAuAAAjAaIACgDQApgpA6AAQAvAAAjAbQAHgMALgLQAfgeAogDQgBgLAAgMQAAgvAggiQAiggAvAAQAuAAAiAgQAdAdAEAnQATAIARARIAKAMIAAChIgKALQgmAmg2AAQgnAAgegTIgFAGQgjAjgwAAQgdAAgYgNQgKAagVAVQgkAjgvAFQgGAhgaAZQghAhguAAQgvAAghghQgWgWgIgcQgqgHgfggIgNgOQgGAWgTATIgEADQADAPAAAQQAABAgsAsQgtAsg/AAQg/AAgtgsg");
// 	this.shape_2.setTransform(162,332.3);

// 	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

// }).prototype = getMCSymbolPrototype(lib.Trees, new cjs.Rectangle(-9.1,297,342.5,94.1), null);


// (lib.Clouds = function(mode,startPosition,loop) {
// 	this.initialize(mode,startPosition,loop,{});

// 	// Front
// 	this.shape = new cjs.Shape();
// 	this.shape.graphics.f("#ECF8FF").s().p("A6cIRIgKiKIAAtrQAUgFAXAAQBBAAAuAtQAkAkAJAvQBrAIBOBNQBNBNAJBoQAJgNAMgLQA3g3BPAAQAbAAAYAHIAAgOQAAhUA8g7QA8g7BVAAQBUAAA8A7QApAoAOAzQAygeA/AAQA1AAAsAUIACgCQArgqA7AAQA7AAAqAqQAqApAAA7IAAACQANgUARgRQBDhBBcAAQBdAABCBBQAiAiARApQALgUASgSQAzgxBHAAQAYAAAWAFIgBgVQgBhmBKhIQBIhIBnAAQBnAABJBIQA8A7ALBPQAlAHAeAXIAAgLQAAhCAvgvQAwgvBCAAQBDAAAwAvQARARALAUQADhcBDhCQBFhFBhAAQBiAABGBFIADADIAAPZg");
// 	this.shape.setTransform(-0.4,-9.8);

// 	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

// 	// Back
// 	this.shape_1 = new cjs.Shape();
// 	this.shape_1.graphics.f("#D0EFFF").s().p("A5hIRIAAwfIANgBIAUgBQBiAABFBFQBDBCACBcQALgUASgRQAvgvBDAAQBCAAAwAvQAvAvAABCIAAALQAegXAmgHQALhPA7g7QBJhIBnAAQBnAABJBIQAtAtARA3IAOgPQBQhPBwAAQBxAABPBPQAZAZARAcQBNAHA6A5QASARAMAUIAAgCQAAg7AqgpQAqgqA7AAQA8AAAqAqIACACQAsgUA1AAQA/AAAzAeQAOgzAogoQA8g7BUAAQA1AAArAXQAKgMAMgMQBVhVB5AAQB4AABWBVIADAEQAogiA2AAQAlAAAfAQQALgZAVgVQAugtBCAAQAWAAAUAFIAANrIgKCKg");
// 	this.shape_1.setTransform(-8.8,-13.4);

// 	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

// }).prototype = getMCSymbolPrototype(lib.Clouds, new cjs.Rectangle(-172.2,-66.3,342.2,109.4), null);


// (lib.Symbol1 = function(mode,startPosition,loop) {
// 	this.initialize(mode,startPosition,loop,{});

// 	// Layer_1
// 	this.pipe0 = new lib.LowerPipe();
// 	this.pipe0.name = "pipe0";
// 	this.pipe0.parent = this;
// 	this.pipe0.setTransform(71.7,39.8,0.497,0.497,0,0,0,-33.5,65.8);

// 	this.pipe2 = new lib.LowerPipe();
// 	this.pipe2.name = "pipe2";
// 	this.pipe2.parent = this;
// 	this.pipe2.setTransform(663,186.7,0.736,0.736,0,0,0,-32.2,64.9);

// 	this.pipe1 = new lib.LowerPipe();
// 	this.pipe1.name = "pipe1";
// 	this.pipe1.parent = this;
// 	this.pipe1.setTransform(339.2,123.6,1,1,0,0,0,-32.8,64.7);

// 	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pipe1},{t:this.pipe2},{t:this.pipe0}]}).wait(1));

// }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,769.1,244.6), null);


// (lib.Background = function(mode,startPosition,loop) {
// 	this.initialize(mode,startPosition,loop,{});

// 	// Layer 2
// 	this.shape = new cjs.Shape();
// 	this.shape.graphics.f("#2277BA").s().p("AgyA0QgWgWAAgeQAAgdAWgWQAVgVAdAAQAeAAAVAVQAWAWAAAdQAAAegWAWQgVAVgeAAQgdAAgVgVg");
// 	this.shape.setTransform(42.3,250.2,0.323,0.323,0,0,0,1.7,2.2);

// 	this.shape_1 = new cjs.Shape();
// 	this.shape_1.graphics.f("#F1F2F2").s().p("AgBCOQhCgBgqg0Qgqg0ANhCQAJgpAegeQAegdApgJQAigGAeAIQAMADARAIIANAIQAJAGgBAFQAAACgEABIgQgBQgjAAgVAbQgVAcAJAjQAEARAOANQANAOASAEQAeAIAagQQAMgHAIgMIAGgJQAGgJADAAQAAAAABAAQAAAAAAAAQABABAAAAQABABAAABQADAHgEAVQgIAjgeAiIgQAQQgnAlgvAAIgBAAg");
// 	this.shape_1.setTransform(40.1,251.3,0.323,0.323,0,0,0,1.7,2.2);

// 	this.shape_2 = new cjs.Shape();
// 	this.shape_2.graphics.f("#D1D3D4").s().p("AnpTjQk7ifhamVQgVkWAGh+QABgnAFgUIAEgLQDUBBDJgVQECgbCKirQAGgHgGgHQgGgGgIAEQiZBXhfAaQhxAficgNQjMgRh4g2QixhPhNixQgZg6gChAQgChAAVg6QArhzCLhWQBFgrA9gUQAbhhAOgvQAZhSAdg6QBOicCrhwQCphvDWgbQEIgiFOA0QEvAvGHB8QAcAJAVASQAWATAKAaQAYA6gZBFQgKAbgXAQQgXAPgcAAQlmgCj4A5QmEBZAJDVQAeDDGaBMQDxAuEvgEQAUAAARALQARALAIASQAiBMAJBPQANBzgsBkQgKAYgWAQQgWAPgaACQk6AZg0AFQjBAUh1AeQknBLgHDFQgGC7GiBYQCZAgC0ANQCZAKBegIQASgBAPAJQAQAJAHARQAXAxADAhQAEAogUAsQgPAigiALQkoBeiUAjQjhA1k3AgIgeABQmMAAjjhzg");
// 	this.shape_2.setTransform(52.4,282.7,0.323,0.323,0,0,0,2.2,2.2);

// 	this.shape_3 = new cjs.Shape();
// 	this.shape_3.graphics.f("#6D6E71").s().p("AA4BGIAAhEIgBgQQgCgHgCgDQgCgDgDgDQgEgBgDAAQgTAAAAAhIAABEIgnAAIgBhUIgDgLQgCgEgEgCQgDgBgFAAIgGABQgEABgCAFQgDACgBAJQgCAHAAAJIAABEIgnAAIAAiJIAnAAIAAARQARgTAUAAQAYAAANAaQANgaAZAAQAIAAAIACQAHAEAFAFQAEAGAEALQACAJAAANIAABZg");
// 	this.shape_3.setTransform(88,346,0.323,0.323);

// 	this.shape_4 = new cjs.Shape();
// 	this.shape_4.graphics.f("#6D6E71").s().p("AgaBEQgNgFgJgJQgIgKgGgPQgFgNAAgQQAAgRAFgMQAGgNAIgJQAKgLAMgFQANgGANAAQAOAAANAFQAMAHAKAJQAIAJAGAOQAFANAAARQAAAQgFANQgFANgKALQgJAJgMAFQgMAGgPAAQgPAAgLgGgAgJgcQgFACgDAEIgGAKQgCAFAAAHQAAAHACAFIAGAKQAFAGADABQAFADAEgBQAEABAGgDIAIgHIAGgKQACgFAAgHQAAgGgCgGIgGgKQgDgEgFgCQgEgCgGgBQgFABgEACg");
// 	this.shape_4.setTransform(82.2,346.1,0.323,0.323);

// 	this.shape_5 = new cjs.Shape();
// 	this.shape_5.graphics.f("#6D6E71").s().p("AgGBEQgKgFgJgKQgIgJgGgNQgFgPAAgPQAAgQAFgNQAEgNAJgKQAJgKALgGQALgFANAAQAPAAAMAHIAAAqQgKgJgLAAQgGAAgFACQgFADgDAEQgEAFgBAGQgCAFAAAHQAAAIACAGIAEAKQAEAEAFADQAFACAGAAQALAAAKgJIAAApQgPAIgNAAQgMAAgLgFg");
// 	this.shape_5.setTransform(78.1,346.1,0.323,0.323);

// 	this.shape_6 = new cjs.Shape();
// 	this.shape_6.graphics.f("#6D6E71").s().p("AgJAdQgFgCgDgFIgGgKQgCgFAAgHQAAgGACgFIAGgKQADgFAFgCQAEgCAFAAQAGAAAEACQAFACADAFIAGAKQACAFAAAGQAAAHgCAFIgGAKQgDAFgFACQgEACgGAAQgFAAgEgCg");
// 	this.shape_6.setTransform(75.3,347.5,0.323,0.323);

// 	this.shape_7 = new cjs.Shape();
// 	this.shape_7.graphics.f("#6D6E71").s().p("AATBGIgBhVQgBgGgDgEIgGgEQgDgCgEAAQgJAAgFAIQgGAIAAANIAABIIgnAAIAAiIIAnAAIAAARQAHgLAKgFQAHgEALAAQANAAAHAEQAJAFAGAJQAFAIACAHQACALAAAJIAABWg");
// 	this.shape_7.setTransform(71.9,346,0.323,0.323);

// 	this.shape_8 = new cjs.Shape();
// 	this.shape_8.graphics.f("#6D6E71").s().p("AgXBlQgMgEgIgHQgIgHgFgJQgGgLgBgLIAtAAQADAOAPABQAMgBAHgIQAGgJAAgPIAAgNQgDAFgFADIgIAFIgJAEIgJABQgNgBgJgFQgKgFgIgIQgIgKgDgMQgEgLAAgRQAAgQAEgNQAEgOAIgKQAIgKAKgGQALgFAMAAQATAAANASIAAgPIAoAAIgBCVIgDAPQgDAKgFAHQgGAIgIAFQgHAGgLADQgLADgKAAQgNAAgKgEgAgHg9IgIAGQgFAGgBAEQgCAHAAAGIACAMIAFAKQAEAFAEACQAFACAFAAQAGAAAEgCQAFgDADgEIAFgKQACgFAAgHQAAgIgCgFIgFgKQgEgEgEgCQgFgCgFgBQgFABgEACg");
// 	this.shape_8.setTransform(67.1,347.1,0.323,0.323);

// 	this.shape_9 = new cjs.Shape();
// 	this.shape_9.graphics.f("#6D6E71").s().p("AgTBtIAAiJIAnAAIAACJgAgIg3IgHgGIgFgJQgCgFAAgGQAAgFACgFIAFgJIAHgGIAIgCQAEAAAFACIAHAGQAEAEAAAFQACAGAAAEIgCALQAAAFgEAEIgHAGQgFACgEAAQgDAAgFgCg");
// 	this.shape_9.setTransform(63.8,344.8,0.323,0.323);

// 	this.shape_10 = new cjs.Shape();
// 	this.shape_10.graphics.f("#6D6E71").s().p("AgwA6IAOgiQARAOAPAAQAEAAAEgDQADgDAAgEIAAgFIgDgDIgFgDIgIgDQgTgEgGgJQgIgIAAgQQAAgMAEgIQAEgKAGgHQAHgGAJgDQAKgEAKAAQATAAARAJIgOAgQgKgHgLAAQgGAAgDADQgCACAAAEIAAAFQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABAAIAFADIAKADQAQADAIALQAIAJAAAQQAAANgEAJQgEAKgHAGQgHAHgKAEQgJADgLAAQgYAAgVgQg");
// 	this.shape_10.setTransform(61.1,346.1,0.323,0.323);

// 	this.shape_11 = new cjs.Shape();
// 	this.shape_11.graphics.f("#6D6E71").s().p("AgXBFQgLgFgJgKQgJgLgFgMQgEgNAAgRQAAgQAEgOQAFgOAIgJQAIgKALgGQANgFANAAQAOAAAMAFQALAGAIAKQAHAJAFAPQAEAPAAAQIAAAGIhTAAQAAAfAXAAQANAAAHgNIAnAAQgMAvgvAAQgOAAgLgFgAgNgjQgFAGgBAKIAsAAQgDgKgFgGQgHgGgIgBQgIAAgHAHg");
// 	this.shape_11.setTransform(57.1,346.1,0.323,0.323);

// 	this.shape_12 = new cjs.Shape();
// 	this.shape_12.graphics.f("#6D6E71").s().p("AgeBsQgKgFgIgLQgIgJgEgOQgFgNAAgQQAAgOAEgOQAGgOAGgIQAIgLAKgFQAKgGANAAQAUAAAOASIAAhjIAoAAIAADeIgoAAIAAgPQgNAUgVAAQgMAAgKgGgAgIAMQgEACgEAEIgFAKQgCAFAAAHQAAAIACAEQACAHADAEQAEAEAEACQAFADAEAAQAFAAAFgDQAEgBAFgFIAFgKIACgMIgCgNIgFgKQgEgEgFgCQgDgDgHAAQgEAAgFADg");
// 	this.shape_12.setTransform(52.4,344.8,0.323,0.323);

// 	this.shape_13 = new cjs.Shape();
// 	this.shape_13.graphics.f("#6D6E71").s().p("AgFBEQgLgEgJgLQgIgJgGgNQgFgPAAgPQAAgOAFgPQAEgNAJgKQAKgLAKgFQAMgFAMAAQAPAAAMAHIAAAqQgJgJgMAAQgGAAgFACIgIAHQgEAFgBAGQgCAFAAAHQAAAIACAGQABAGAEAEQACAEAGADQAFACAGAAQALAAAKgJIAAApQgPAIgNAAQgMAAgKgFg");
// 	this.shape_13.setTransform(48.4,346.1,0.323,0.323);

// 	this.shape_14 = new cjs.Shape();
// 	this.shape_14.graphics.f("#6D6E71").s().p("AgfBEQgLgGgHgKQgIgLgEgMQgEgMAAgRQAAgQAEgMQAEgNAIgKQAIgKAKgFQAKgGANAAQAUAAAOASIAAgOIAoAAIAACJIgoAAIAAgQQgNAUgVAAQgMAAgLgFgAgIgcQgFACgDAFIgGAKQgCAHAAAEQAAAFACAHQADAHADADIAIAHQAGACADAAQAEAAAGgCIAIgHQADgDADgHQACgFAAgHQAAgGgCgFIgGgKQgDgFgFgCQgEgCgGAAQgFAAgEACg");
// 	this.shape_14.setTransform(44.3,346.1,0.323,0.323);

// 	this.shape_15 = new cjs.Shape();
// 	this.shape_15.graphics.f("#6D6E71").s().p("AgfBEQgKgHgIgJQgIgLgEgMQgEgPAAgOQAAgNAEgPQAGgPAGgIQAIgKAKgFQAKgGANAAQAUAAAOASIAAgOIAoAAIAACJIgoAAIAAgQQgNAUgVAAQgMAAgLgFgAgIgcQgFACgDAFIgGAKQgCAHAAAEQAAAFACAHIAGAKQAFAFADACQAFACAEAAQAFAAAFgCQAFgDADgEQADgDADgHQACgFAAgHQAAgGgCgFIgGgKQgCgEgGgDQgDgCgHAAQgFAAgEACg");
// 	this.shape_15.setTransform(39.5,346.1,0.323,0.323);

// 	this.shape_16 = new cjs.Shape();
// 	this.shape_16.graphics.f("#6D6E71").s().p("AgwA6IAOgiQASAOAOAAQAEAAAEgDQAEgDAAgEIgBgFIgDgDIgEgDIgIgDQgTgEgHgJQgIgIAAgQQAAgKADgKQAEgKAHgHQAGgFAKgEQAKgEAKAAQASAAASAJIgOAgQgKgHgLAAQgGAAgDADQgDACAAAEIABAFIACACIAFADIAJADQARADAIALQAJAKgBAPQAAALgDALQgEAJgIAHQgIAHgJAEQgIADgMAAQgXAAgWgQg");
// 	this.shape_16.setTransform(35.4,346.1,0.323,0.323);

// 	this.shape_17 = new cjs.Shape();
// 	this.shape_17.graphics.f("#6D6E71").s().p("AgTBtIAAiJIAnAAIAACJgAgIg3IgHgGQgEgEgBgFQgBgFAAgGQAAgFABgFQABgFAEgEIAHgGQAFgCADAAIAJACIAHAGIAFAJQABAFAAAFQAAAGgBAFIgFAJIgHAGQgFACgEAAQgEAAgEgCg");
// 	this.shape_17.setTransform(32.7,344.8,0.323,0.323);

// 	this.shape_18 = new cjs.Shape();
// 	this.shape_18.graphics.f("#6D6E71").s().p("AgYBaIAAhhIgNAAIAAgoIANAAIAAgpIAnAAIAAApIAXAAIAAAoIgXAAIAABhg");
// 	this.shape_18.setTransform(30.4,345.4,0.323,0.323);

// 	this.shape_19 = new cjs.Shape();
// 	this.shape_19.graphics.f("#6D6E71").s().p("AgYBaIAAhhIgNAAIAAgoIANAAIAAgpIAnAAIAAApIAXAAIAAAoIgXAAIAABhg");
// 	this.shape_19.setTransform(27.7,345.4,0.323,0.323);

// 	this.shape_20 = new cjs.Shape();
// 	this.shape_20.graphics.f("#6D6E71").s().p("AgaBEQgNgGgJgIQgJgLgEgOQgGgOAAgPQAAgPAGgOQADgLAKgLQAKgLAMgFQAMgGAOAAQANAAAOAFQANAHAIAJQAKAKAFANQAFAOAAAQQAAAPgFAOQgGAOgJAKQgJAJgMAFQgLAGgQAAQgQAAgKgGgAgJgcQgFADgDADQgEAGgCAEQgBAFAAAHQAAAHABAFQACAGAEAEQAEAFAEACQAFADAEgBQAFABAFgDQAFgCADgFQADgDACgHQACgFAAgHQAAgGgCgGIgFgKQgCgDgGgDQgDgCgHgBQgFABgEACg");
// 	this.shape_20.setTransform(24,346.1,0.323,0.323);

// 	this.shape_21 = new cjs.Shape();
// 	this.shape_21.graphics.f("#6D6E71").s().p("AgSBtIAAiJIAmAAIAACJgAgHg3IgIgGQgDgEgBgFIgDgLQAAgEADgGQABgFADgEIAIgGQAEgCADAAIAJACIAHAGIAFAJQABAFAAAFQAAAGgBAFIgFAJIgHAGQgFACgEAAQgEAAgDgCg");
// 	this.shape_21.setTransform(20.5,344.8,0.323,0.323);

// 	this.shape_22 = new cjs.Shape();
// 	this.shape_22.graphics.f("#6D6E71").s().p("AgTBwIAAjfIAnAAIAADfg");
// 	this.shape_22.setTransform(18.5,344.7,0.323,0.323);

// 	this.shape_23 = new cjs.Shape();
// 	this.shape_23.graphics.f("#6D6E71").s().p("AgTBwIAAjfIAnAAIAADfg");
// 	this.shape_23.setTransform(16.5,344.7,0.323,0.323);

// 	this.shape_24 = new cjs.Shape();
// 	this.shape_24.graphics.f("#6D6E71").s().p("AgXBFQgLgFgJgKQgKgLgDgMQgFgNAAgRQAAgQAFgOQAEgOAIgJQAIgKALgGQANgFAMAAQAOAAANAFQALAGAIAKQAHAJAFAPQAEAPAAAQIAAAGIhTAAQAAAfAXAAQANAAAHgNIAnAAQgNAvguAAQgNAAgMgFgAgNgjQgFAGgBAKIAsAAQgDgKgFgGQgHgGgIgBQgIAAgHAHg");
// 	this.shape_24.setTransform(13.3,346.1,0.323,0.323);

// 	this.shape_25 = new cjs.Shape();
// 	this.shape_25.graphics.f("#A7A9AC").s().p("AgOCCQgYgJgVgTQgUgTgLgZQgMgZAAgfQAAgeAMgaQAKgZAUgUQATgSAagLQAagLAeAAQAiAAAcAPIAABPQgZgQgXAAQgNAAgMAEQgKAEgKAJQgIAJgEALQgFAKAAAPQAAAPAFAKQADALAJAJQAIAIAMAGQAMAEANAAQAZAAAXgSIAABPQgjAOgdAAQgdABgYgKg");
// 	this.shape_25.setTransform(87.8,335.5,0.323,0.323);

// 	this.shape_26 = new cjs.Shape();
// 	this.shape_26.graphics.f("#A7A9AC").s().p("AhHCBQgYgLgRgTQgSgRgKgbQgKgaAAgdQAAgcAKgZQAJgZASgUQARgTAYgKQAWgMAeAAQAvAAAgAjIAAgbIBcAAIAAEHIhcAAIAAgeQgdAlgxAAQgcABgYgLgAgTg2QgLAFgIAIQgIAIgEAKQgFALAAAMQAAAMAFALQAEALAIAJQAHAHAMAFQALAFALAAQALAAAMgFQAMgFAHgHQAIgKAEgJQAFgLAAgNQAAgLgFgLQgDgKgJgJQgIgIgLgFQgLgFgMAAQgMAAgKAFg");
// 	this.shape_26.setTransform(79.1,335.5,0.323,0.323);

// 	this.shape_27 = new cjs.Shape();
// 	this.shape_27.graphics.f("#A7A9AC").s().p("AhHCBQgZgLgQgTQgSgRgKgbQgKgaAAgdQAAgcAKgZQAJgZASgUQARgTAYgKQAWgMAeAAQAvAAAgAjIAAgbIBcAAIAAEHIhcAAIAAgeQgdAlgxAAQgcABgYgLgAgTg2QgLAEgIAJQgIAIgEAKQgFALAAAMQAAAMAFALQAEALAIAJQAIAHALAFQALAFALAAQALAAAMgFQAMgFAHgHQAIgKAEgJQAFgLAAgNQAAgLgFgLQgDgKgJgJQgIgIgLgFQgLgFgMAAQgMAAgKAFg");
// 	this.shape_27.setTransform(68.8,335.5,0.323,0.323);

// 	this.shape_28 = new cjs.Shape();
// 	this.shape_28.graphics.f("#A7A9AC").s().p("AhwBvIAhhCQAmAbAiAAQAMAAAIgGQAIgFAAgJQAAgEgBgEQgBgDgEgEQgFgCgHgCQgKgEgKgBQgqgKgRgRQgQgPAAgfQAAgWAHgSQAJgSAPgMQAQgMAUgHQAVgGAaAAQArAAAoARIgfA9QgZgOgYAAQgNAAgIAFQgGAFAAAJIABAHQABAEADACQAFACAIACIAWAFQAmAIASAUQATASAAAgQAAAWgJATQgJASgQANQgQAMgXAIQgWAGgbAAQg0AAgzgeg");
// 	this.shape_28.setTransform(60.2,335.5,0.323,0.323);

// 	this.shape_29 = new cjs.Shape();
// 	this.shape_29.graphics.f("#A7A9AC").s().p("AgwDBIAAmBIBhAAIAAGBg");
// 	this.shape_29.setTransform(54.3,333.5,0.323,0.323);

// 	this.shape_30 = new cjs.Shape();
// 	this.shape_30.graphics.f("#2277BA").s().p("Ag4CrIAAi5IgeAAIAAhNIAeAAIAAhPIBbAAIAABPIA0AAIAABNIg0AAIAAC5g");
// 	this.shape_30.setTransform(49.6,334.3,0.323,0.323);

// 	this.shape_31 = new cjs.Shape();
// 	this.shape_31.graphics.f("#2277BA").s().p("Ag3CrIAAi5IgfAAIAAhNIAfAAIAAhPIBaAAIAABPIA0AAIAABNIg0AAIAAC5g");
// 	this.shape_31.setTransform(44.2,334.3,0.323,0.323);

// 	this.shape_32 = new cjs.Shape();
// 	this.shape_32.graphics.f("#2277BA").s().p("Ag+CDQgcgLgUgSQgVgUgLgaQgMgZAAggQAAgdAMgaQALgZAVgTQAUgSAdgMQAcgKAhAAQAhAAAdAKQAdALAUATQAVASAMAaQALAZAAAfQAAAegLAbQgMAagVATQgUASgeALQgbAKgiAAQgjAAgbgKgAgWg3QgLAFgHAIQgIAHgFALQgFALAAANQAAANAFAKQAFALAIAJQAHAHALAFQAMAFAKAAQALAAAMgFQAMgFAHgHQAIgJAEgLQAFgKAAgNQAAgMgFgLQgEgLgIgIQgIgIgLgFQgLgEgMgBQgLABgLAEg");
// 	this.shape_32.setTransform(36.4,335.5,0.323,0.323);

// 	this.shape_33 = new cjs.Shape();
// 	this.shape_33.graphics.f("#2277BA").s().p("AgsDQIAAkGIBaAAIAAEGgAgThrQgKgEgGgHQgHgGgEgKQgEgJAAgMQAAgMAEgIQAEgKAHgGQAGgHAKgFQAKgEAJAAQAKAAAKAEQAKAFAGAHQAIAHADAJQAEAIAAAMQAAAMgEAJQgDAJgIAHQgGAHgKAEQgKAEgKAAQgJAAgKgEg");
// 	this.shape_33.setTransform(29.4,333.1,0.323,0.323);

// 	this.shape_34 = new cjs.Shape();
// 	this.shape_34.graphics.f("#2277BA").s().p("AgsDVIAAmpIBZAAIAAGpg");
// 	this.shape_34.setTransform(25.5,332.9,0.323,0.323);

// 	this.shape_35 = new cjs.Shape();
// 	this.shape_35.graphics.f("#2277BA").s().p("AgtDVIAAmpIBaAAIAAGpg");
// 	this.shape_35.setTransform(21.6,332.9,0.323,0.323);

// 	this.shape_36 = new cjs.Shape();
// 	this.shape_36.graphics.f("#2277BA").s().p("AhrDBIAAmBIDXAAIAABVIh0AAIAABBIBtAAIAABUIhtAAIAABCIB0AAIAABVg");
// 	this.shape_36.setTransform(15.8,333.5,0.323,0.323);

// 	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

// 	// Trees
// 	this.instance = new lib.Trees();
// 	this.instance.parent = this;
// 	this.instance.setTransform(162.1,344,1,1,0,0,0,162.1,344);

// 	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

// 	// Clouds
// 	this.instance_1 = new lib.Clouds();
// 	this.instance_1.parent = this;
// 	this.instance_1.setTransform(162.7,309.5);

// 	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

// 	// Sky
// 	this.shape_37 = new cjs.Shape();
// 	this.shape_37.graphics.f().s("#70C6CE").ss(1,1,1).p("A3b/PMAu3AAAMAAAA+fMgu3AAAg");
// 	this.shape_37.setTransform(150,200.1);

// 	this.shape_38 = new cjs.Shape();
// 	this.shape_38.graphics.lf(["#56CCFF","#E7F7FF"],[0,1],0,-199.9,0,200).s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
// 	this.shape_38.setTransform(150,200.1);

// 	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).wait(1));

// }).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-9.6,-0.9,342.9,402), null);


// // stage content:
// (lib.hangman = function(mode,startPosition,loop) {
// 	this.initialize(mode,startPosition,loop,{});

// 	// ground
// 	this.ground2 = new lib.GroundSlice();
// 	this.ground2.name = "ground2";
// 	this.ground2.parent = this;
// 	this.ground2.setTransform(470.5,375.8,1,1,0,0,0,96.5,24.8);
// 	this.ground2.cache(-10,-10,212,70);

// 	this.ground1 = new lib.GroundSlice();
// 	this.ground1.name = "ground1";
// 	this.ground1.parent = this;
// 	this.ground1.setTransform(283.5,375.8,1,1,0,0,0,96.5,24.8);
// 	this.ground1.cache(-10,-10,212,70);

// 	this.ground0 = new lib.GroundSlice();
// 	this.ground0.name = "ground0";
// 	this.ground0.parent = this;
// 	this.ground0.setTransform(96.5,375.8,1,1,0,0,0,96.5,24.8);
// 	this.ground0.cache(-10,-10,212,70);

// 	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ground0},{t:this.ground1},{t:this.ground2}]}).to({state:[{t:this.ground0},{t:this.ground1},{t:this.ground2}]},1315).wait(7));

// 	// pipes
// 	this.instance = new lib.Symbol1();
// 	this.instance.parent = this;
// 	this.instance.setTransform(697.7,153.4,1,1,0,0,0,384.6,122.2);

// 	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-401.6,y:137.4},1315).wait(7));

// 	// bg
// 	this.instance_1 = new lib.Background();
// 	this.instance_1.parent = this;
// 	this.instance_1.setTransform(161.8,200.1,1,1,0,0,0,161.8,200.1);
// 	this.instance_1.cache(-12,-3,347,406);

// 	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1322));

// }).prototype = p = new cjs.MovieClip();
// p.nominalBounds = new cjs.Rectangle(140.4,199.6,1091.8,401.5);
// // library properties:
// lib.properties = {
// 	id: 'F82A4A5C259F4DB493B6AE5396226E4A',
// 	width: 300,
// 	height: 400,
// 	fps: 60,
// 	color: "#CCCCCC",
// 	opacity: 1.00,
// 	manifest: [],
// 	preloads: []
// };



// // bootstrap callback support:

// (lib.Stage = function(canvas) {
// 	createjs.Stage.call(this, canvas);
// }).prototype = p = new createjs.Stage();

// p.setAutoPlay = function(autoPlay) {
// 	this.tickEnabled = autoPlay;
// }
// p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
// p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
// p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
// p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

// p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

// an.bootcompsLoaded = an.bootcompsLoaded || [];
// if(!an.bootstrapListeners) {
// 	an.bootstrapListeners=[];
// }

// an.bootstrapCallback=function(fnCallback) {
// 	an.bootstrapListeners.push(fnCallback);
// 	if(an.bootcompsLoaded.length > 0) {
// 		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
// 			fnCallback(an.bootcompsLoaded[i]);
// 		}
// 	}
// };

// an.compositions = an.compositions || {};
// an.compositions['F82A4A5C259F4DB493B6AE5396226E4A'] = {
// 	getStage: function() { return exportRoot.getStage(); },
// 	getLibrary: function() { return lib; },
// 	getSpriteSheet: function() { return ss; },
// 	getImages: function() { return img; }
// };

// an.compositionLoaded = function(id) {
// 	an.bootcompsLoaded.push(id);
// 	for(var j=0; j<an.bootstrapListeners.length; j++) {
// 		an.bootstrapListeners[j](id);
// 	}
// }

// an.getComposition = function(id) {
// 	return an.compositions[id];
// }



// })(createjs = createjs||{}, AdobeAn = AdobeAn||{});
// var createjs, AdobeAn;