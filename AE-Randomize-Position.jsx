/*

  Randomize Position
  Copyright (c) 2016 Marco Dell'Anna
  http://www.plasm.it

  Description:
  - Randomize position of selected layers

  Authors:
  - Marco Dell'Anna

  Requires:
  - After Effects CS5 or higher

  ---------------------

  The MIT License

  Copyright (c) 2011-2014 Marco Dell'Anna, <http://www.plasm.it/>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, merge, publish, distribute
  copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  -
  The software can not be used for commercial purposes or for profit.
  For commercial use contact the author
  -

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.

*/
#target aftereffects
{
 app.beginUndoGroup("Randomize");
  // Comp
  var comp = app.project.activeItem;
  var width = comp.width;
  var height = comp.height;
  var selLayers = comp.selectedLayers;
  if (selLayers.length < 1) {
    alert("Select the level");
  } else {
    for(var i=0; i < selLayers.length; i++){
      var layer = selLayers[i];
      var x = Math.random()*width;
      var y = Math.random()*height;
      var positions = layer.property("position");
          positions.setValue([x, y]);
    }
  }
  app.endUndoGroup();
}
