/*
 The MIT License (MIT)

 Copyright (c) 2016 Bartlomiej Koper <bkoper@gmail.com>

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the 'Software'), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

import Gpio from "./artik-gpio";
import Led from "./led";

let toggle = true;
let led = new Led(Gpio.pins.ARTIK_10.J27[13]);
const interval = 100;
const stopTime = 5000;
const event = Gpio.event.RISING;

let iv = setInterval(function () {
    toggle = !toggle;
    toggle ? led.turnOn() : led.turnOff();
}, interval);

led.on(event, callback);

setTimeout(() => {
    led.off(event, callback);
    led.turnOff();
    led.unload();
    clearInterval(iv);
}, stopTime);

function callback(val) {
    console.log(val);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJibGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gQ29weXJpZ2h0IChjKSAyMDE2IEJhcnRsb21pZWogS29wZXIgPGJrb3BlckBnbWFpbC5jb20+XG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgJ1NvZnR3YXJlJyksIHRvIGRlYWxcbiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBHcGlvIGZyb20gXCIuL2FydGlrLWdwaW9cIjtcbmltcG9ydCBMZWQgZnJvbSBcIi4vbGVkXCI7XG5cbmxldCB0b2dnbGUgPSB0cnVlO1xubGV0IGxlZCA9IG5ldyBMZWQoR3Bpby5waW5zLkFSVElLXzEwLkoyN1sxM10pO1xuY29uc3QgaW50ZXJ2YWwgPSAxMDA7XG5jb25zdCBzdG9wVGltZSA9IDUwMDA7XG5jb25zdCBldmVudCA9IEdwaW8uZXZlbnQuUklTSU5HO1xuXG5sZXQgaXYgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB0b2dnbGUgPyBsZWQudHVybk9uKCkgOiBsZWQudHVybk9mZigpO1xufSwgaW50ZXJ2YWwpO1xuXG5sZWQub24oZXZlbnQsIGNhbGxiYWNrKTtcblxuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbGVkLm9mZihldmVudCwgY2FsbGJhY2spO1xuICAgIGxlZC50dXJuT2ZmKCk7XG4gICAgbGVkLnVubG9hZCgpO1xuICAgIGNsZWFySW50ZXJ2YWwoaXYpO1xufSwgc3RvcFRpbWUpO1xuXG5mdW5jdGlvbiBjYWxsYmFjayh2YWwpIHtcbiAgICBjb25zb2xlLmxvZyh2YWwpO1xufSJdLCJmaWxlIjoiYmxpbmsuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
