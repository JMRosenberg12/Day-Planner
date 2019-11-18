

moment().format('MMMM Do YYYY, h:mm:ss a'); // November 18th 2019, 8:21:49 am
moment().format('dddd');                    // Monday
moment().format("MMM Do YY");               // Nov 18th 19
moment().format('YYYY [escaped] YYYY');     // 2019 escaped 2019
moment().format();                          // 2019-11-18T08:21:49-06:00
                                           

moment("20111031", "YYYYMMDD").fromNow(); // 8 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 7 years ago
moment().startOf('day').fromNow();        // 8 hours ago
moment().endOf('day').fromNow();          // in 16 hours
moment().startOf('hour').fromNow();       // 12 minutes ago

moment().subtract(10, 'days').calendar(); // 11/08/2019
moment().subtract(6, 'days').calendar();  // Last Tuesday at 8:16 AM
moment().subtract(3, 'days').calendar();  // Last Friday at 8:16 AM
moment().subtract(1, 'days').calendar();  // Yesterday at 8:16 AM
moment().calendar();                      // Today at 8:16 AM
moment().add(1, 'days').calendar();       // Tomorrow at 8:16 AM
moment().add(3, 'days').calendar();       // Thursday at 8:16 AM
moment().add(10, 'days').calendar();      // 11/28/2019

moment().locale();         // en
moment().format('LT');   // 8:22 AM
moment().format('LTS');  // 8:22:39 AM
moment().format('L');    // 11/18/2019
moment().format('l');    // 11/18/2019
moment().format('LL');   // November 18, 2019
moment().format('ll');   // Nov 18, 2019
moment().format('LLL');  // November 18, 2019 8:22 AM
moment().format('lll');  // Nov 18, 2019 8:22 AM
moment().format('LLLL'); // Monday, November 18, 2019 8:22 AM
moment().format('llll'); // Mon, Nov 18, 2019 8:22 AM

                        
                                         
                                         
