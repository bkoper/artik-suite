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

let ARTIK_10 = {
	J24: {
		"A0": 0,
		"A1": 1,
		"A2": 2,
		"A3": 5,
		"A4": 6,
		"A5": 7
	},

    J26: {
        "Rx-0": null,
        "Tx-0": null,
        "2": 8,
        "3": 9,
        "4": 10,
        "5": 0,
        "6": 1,
        "7": 11
    },

	J27: {
        "8": 12,
        "9": 13,
        "10": 14,
        "11": 16,
        "12": 21,
        "13": 22,
        "GND": "GND"
    }
};

let ARTIK_5 = {
	J24: {
		"A0": 0,
		"A1": 1,
	},

    J26: {
        "Rx-0": "Rx",
        "Tx-1": "Tx",
        "2": 121,
        "3": 122,
        "4": 123,
        "5": 0,
        "6": 1,
        "7": 124
    },

    J27: {
        "8": 125,
        "9": 126,
        "10": 127,
        "11": 129,
        "12": 134,
        "13": 135,
        "GND": "GND"
    }
}

export default {
    pins: {
        ARTIK_5: Object.assign({}, ARTIK_5, {
            //Pins 0, 1, 2, 5, 6, 7 can be used as Analog Inputs.
			"analog0": ARTIK_10.J24["A0"],
			"analog1": ARTIK_10.J24["A1"],

            //Pins 2-4 and 7-13 are GPIO and can be used as digital input or output
            "rx": ARTIK_5.J26["Rx-0"],
            "tx": ARTIK_5.J26["Tx-0"],
            "2": ARTIK_5.J26[2],
            "3": ARTIK_5.J26[3],
            "4": ARTIK_5.J26[4],
            "5": ARTIK_5.J26[5],
            "6": ARTIK_5.J26[6],
            "7": ARTIK_5.J26[7],

            "8": ARTIK_5.J27[8],
            "9": ARTIK_5.J27[9],
            "10": ARTIK_5.J27[10],
            "11": ARTIK_5.J27[11],
            "12": ARTIK_5.J27[12],
            "13": ARTIK_5.J27[13],
            "gnd": ARTIK_5.J27["GND"],

            "pwm0": ARTIK_5.J26[5],
            "pwm1": ARTIK_5.J26[6]
        }),

        ARTIK_10: Object.assign({}, ARTIK_10, {
            //Pins 0, 1, 2, 5, 6, 7 can be used as Analog Inputs.
			"analog0": ARTIK_10.J24["A0"],
			"analog1": ARTIK_10.J24["A1"],
			"analog2": ARTIK_10.J24["A2"],
			"analog3": ARTIK_10.J24["A3"],
			"analog4": ARTIK_10.J24["A4"],
			"analog5": ARTIK_10.J24["A5"],

            //Pins 2-4 and 7-13 are GPIO and can be used as digital input or output
            "rx": ARTIK_10.J26["Rx-0"],
            "tx": ARTIK_10.J26["Tx-0"],
            "2": ARTIK_10.J26[2],
            "3": ARTIK_10.J26[3],
            "4": ARTIK_10.J26[4],
            "5": ARTIK_10.J26[5],
            "6": ARTIK_10.J26[6],
            "7": ARTIK_10.J26[7],

            "8": ARTIK_10.J27[8],
            "9": ARTIK_10.J27[9],
            "10": ARTIK_10.J27[10],
            "11": ARTIK_10.J27[11],
            "12": ARTIK_10.J27[12],
            "13": ARTIK_10.J27[13],
            "gnd": ARTIK_10.J27["GND"],

            "pwm0": ARTIK_10.J26[5],
            "pwm1": ARTIK_10.J26[6]
        })
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcnRpay1pby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG4gQ29weXJpZ2h0IChjKSAyMDE2IEJhcnRsb21pZWogS29wZXIgPGJrb3BlckBnbWFpbC5jb20+XG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgJ1NvZnR3YXJlJyksIHRvIGRlYWxcbiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmxldCBBUlRJS18xMCA9IHtcblx0SjI0OiB7XG5cdFx0XCJBMFwiOiAwLFxuXHRcdFwiQTFcIjogMSxcblx0XHRcIkEyXCI6IDIsXG5cdFx0XCJBM1wiOiA1LFxuXHRcdFwiQTRcIjogNixcblx0XHRcIkE1XCI6IDdcblx0fSxcblxuICAgIEoyNjoge1xuICAgICAgICBcIlJ4LTBcIjogbnVsbCxcbiAgICAgICAgXCJUeC0wXCI6IG51bGwsXG4gICAgICAgIFwiMlwiOiA4LFxuICAgICAgICBcIjNcIjogOSxcbiAgICAgICAgXCI0XCI6IDEwLFxuICAgICAgICBcIjVcIjogMCxcbiAgICAgICAgXCI2XCI6IDEsXG4gICAgICAgIFwiN1wiOiAxMVxuICAgIH0sXG5cblx0SjI3OiB7XG4gICAgICAgIFwiOFwiOiAxMixcbiAgICAgICAgXCI5XCI6IDEzLFxuICAgICAgICBcIjEwXCI6IDE0LFxuICAgICAgICBcIjExXCI6IDE2LFxuICAgICAgICBcIjEyXCI6IDIxLFxuICAgICAgICBcIjEzXCI6IDIyLFxuICAgICAgICBcIkdORFwiOiBcIkdORFwiXG4gICAgfVxufTtcblxubGV0IEFSVElLXzUgPSB7XG5cdEoyNDoge1xuXHRcdFwiQTBcIjogMCxcblx0XHRcIkExXCI6IDEsXG5cdH0sXG5cbiAgICBKMjY6IHtcbiAgICAgICAgXCJSeC0wXCI6IFwiUnhcIixcbiAgICAgICAgXCJUeC0xXCI6IFwiVHhcIixcbiAgICAgICAgXCIyXCI6IDEyMSxcbiAgICAgICAgXCIzXCI6IDEyMixcbiAgICAgICAgXCI0XCI6IDEyMyxcbiAgICAgICAgXCI1XCI6IDAsXG4gICAgICAgIFwiNlwiOiAxLFxuICAgICAgICBcIjdcIjogMTI0XG4gICAgfSxcblxuICAgIEoyNzoge1xuICAgICAgICBcIjhcIjogMTI1LFxuICAgICAgICBcIjlcIjogMTI2LFxuICAgICAgICBcIjEwXCI6IDEyNyxcbiAgICAgICAgXCIxMVwiOiAxMjksXG4gICAgICAgIFwiMTJcIjogMTM0LFxuICAgICAgICBcIjEzXCI6IDEzNSxcbiAgICAgICAgXCJHTkRcIjogXCJHTkRcIlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBpbnM6IHtcbiAgICAgICAgQVJUSUtfNTogT2JqZWN0LmFzc2lnbih7fSwgQVJUSUtfNSwge1xuICAgICAgICAgICAgLy9QaW5zIDAsIDEsIDIsIDUsIDYsIDcgY2FuIGJlIHVzZWQgYXMgQW5hbG9nIElucHV0cy5cblx0XHRcdFwiYW5hbG9nMFwiOiBBUlRJS18xMC5KMjRbXCJBMFwiXSxcblx0XHRcdFwiYW5hbG9nMVwiOiBBUlRJS18xMC5KMjRbXCJBMVwiXSxcblxuICAgICAgICAgICAgLy9QaW5zIDItNCBhbmQgNy0xMyBhcmUgR1BJTyBhbmQgY2FuIGJlIHVzZWQgYXMgZGlnaXRhbCBpbnB1dCBvciBvdXRwdXRcbiAgICAgICAgICAgIFwicnhcIjogQVJUSUtfNS5KMjZbXCJSeC0wXCJdLFxuICAgICAgICAgICAgXCJ0eFwiOiBBUlRJS181LkoyNltcIlR4LTBcIl0sXG4gICAgICAgICAgICBcIjJcIjogQVJUSUtfNS5KMjZbMl0sXG4gICAgICAgICAgICBcIjNcIjogQVJUSUtfNS5KMjZbM10sXG4gICAgICAgICAgICBcIjRcIjogQVJUSUtfNS5KMjZbNF0sXG4gICAgICAgICAgICBcIjVcIjogQVJUSUtfNS5KMjZbNV0sXG4gICAgICAgICAgICBcIjZcIjogQVJUSUtfNS5KMjZbNl0sXG4gICAgICAgICAgICBcIjdcIjogQVJUSUtfNS5KMjZbN10sXG5cbiAgICAgICAgICAgIFwiOFwiOiBBUlRJS181LkoyN1s4XSxcbiAgICAgICAgICAgIFwiOVwiOiBBUlRJS181LkoyN1s5XSxcbiAgICAgICAgICAgIFwiMTBcIjogQVJUSUtfNS5KMjdbMTBdLFxuICAgICAgICAgICAgXCIxMVwiOiBBUlRJS181LkoyN1sxMV0sXG4gICAgICAgICAgICBcIjEyXCI6IEFSVElLXzUuSjI3WzEyXSxcbiAgICAgICAgICAgIFwiMTNcIjogQVJUSUtfNS5KMjdbMTNdLFxuICAgICAgICAgICAgXCJnbmRcIjogQVJUSUtfNS5KMjdbXCJHTkRcIl0sXG5cbiAgICAgICAgICAgIFwicHdtMFwiOiBBUlRJS181LkoyNls1XSxcbiAgICAgICAgICAgIFwicHdtMVwiOiBBUlRJS181LkoyNls2XVxuICAgICAgICB9KSxcblxuICAgICAgICBBUlRJS18xMDogT2JqZWN0LmFzc2lnbih7fSwgQVJUSUtfMTAsIHtcbiAgICAgICAgICAgIC8vUGlucyAwLCAxLCAyLCA1LCA2LCA3IGNhbiBiZSB1c2VkIGFzIEFuYWxvZyBJbnB1dHMuXG5cdFx0XHRcImFuYWxvZzBcIjogQVJUSUtfMTAuSjI0W1wiQTBcIl0sXG5cdFx0XHRcImFuYWxvZzFcIjogQVJUSUtfMTAuSjI0W1wiQTFcIl0sXG5cdFx0XHRcImFuYWxvZzJcIjogQVJUSUtfMTAuSjI0W1wiQTJcIl0sXG5cdFx0XHRcImFuYWxvZzNcIjogQVJUSUtfMTAuSjI0W1wiQTNcIl0sXG5cdFx0XHRcImFuYWxvZzRcIjogQVJUSUtfMTAuSjI0W1wiQTRcIl0sXG5cdFx0XHRcImFuYWxvZzVcIjogQVJUSUtfMTAuSjI0W1wiQTVcIl0sXG5cbiAgICAgICAgICAgIC8vUGlucyAyLTQgYW5kIDctMTMgYXJlIEdQSU8gYW5kIGNhbiBiZSB1c2VkIGFzIGRpZ2l0YWwgaW5wdXQgb3Igb3V0cHV0XG4gICAgICAgICAgICBcInJ4XCI6IEFSVElLXzEwLkoyNltcIlJ4LTBcIl0sXG4gICAgICAgICAgICBcInR4XCI6IEFSVElLXzEwLkoyNltcIlR4LTBcIl0sXG4gICAgICAgICAgICBcIjJcIjogQVJUSUtfMTAuSjI2WzJdLFxuICAgICAgICAgICAgXCIzXCI6IEFSVElLXzEwLkoyNlszXSxcbiAgICAgICAgICAgIFwiNFwiOiBBUlRJS18xMC5KMjZbNF0sXG4gICAgICAgICAgICBcIjVcIjogQVJUSUtfMTAuSjI2WzVdLFxuICAgICAgICAgICAgXCI2XCI6IEFSVElLXzEwLkoyNls2XSxcbiAgICAgICAgICAgIFwiN1wiOiBBUlRJS18xMC5KMjZbN10sXG5cbiAgICAgICAgICAgIFwiOFwiOiBBUlRJS18xMC5KMjdbOF0sXG4gICAgICAgICAgICBcIjlcIjogQVJUSUtfMTAuSjI3WzldLFxuICAgICAgICAgICAgXCIxMFwiOiBBUlRJS18xMC5KMjdbMTBdLFxuICAgICAgICAgICAgXCIxMVwiOiBBUlRJS18xMC5KMjdbMTFdLFxuICAgICAgICAgICAgXCIxMlwiOiBBUlRJS18xMC5KMjdbMTJdLFxuICAgICAgICAgICAgXCIxM1wiOiBBUlRJS18xMC5KMjdbMTNdLFxuICAgICAgICAgICAgXCJnbmRcIjogQVJUSUtfMTAuSjI3W1wiR05EXCJdLFxuXG4gICAgICAgICAgICBcInB3bTBcIjogQVJUSUtfMTAuSjI2WzVdLFxuICAgICAgICAgICAgXCJwd20xXCI6IEFSVElLXzEwLkoyNls2XVxuICAgICAgICB9KVxuICAgIH1cbn07Il0sImZpbGUiOiJhcnRpay1pby5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
