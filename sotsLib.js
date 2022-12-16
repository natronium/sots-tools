function xorCodec(buffer){
    const key = 'wow this is a nice key';
    return buffer.map((e, i, arr) =>  e ^ key.charCodeAt(i % key.length));
}

function saveBlobLink(elementId, blob, filename, message){
const link = document.getElementById(elementId);
link.href = URL.createObjectURL(blob);
link.download = filename;
link.text = message;
return link; //in case we want to do something with it later, like click it
}