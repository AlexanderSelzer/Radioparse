var pcap = require("pcap")
var fs = require("fs")
var radioparse = require("../index")

//var session = pcap.createSession("mon0")

//session.on("packet", function(raw) {
  var packet = radioparse.parse(
      fs.readFileSync("./bad_packets/d6a5ca06-d817-49d5-95ea-bdbd625bfd5f.pcap"))

  /*if (packet.frame) {
    if (packet.frame.type === 0 && packet.frame.subtype === 4) 
      console.log(packet)
  }*/

  console.log(packet)
//})
