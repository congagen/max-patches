function dictionary(dictName) {
  var p = new Dict(dictName);
 
  // Get the 'clips' value, which is an array of dictionaries.
  var clips = p.get('clips');
  
  // If no clips, send an empty list and exit.
  if (!clips) {
    outlet(0, 0);
    return;
  }
 
  // Output the total number of clips by getting the length of the array.
  outlet(0, clips.length);
}