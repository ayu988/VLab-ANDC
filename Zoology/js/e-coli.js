window.addEventListener('load', function () {

    const fullSc = document.querySelector('.full-sc');
    const simHead = document.querySelector('.sim--head');
    const switching = document.querySelector('.switching');
    const eColiSim = document.querySelector('.e-coli-sim');
    const centrifuge = document.querySelector('.centrifuge');
    const toggleSwitch = document.querySelector('.btn-nor');
    const rangeSlider = document.querySelector('#range-centri');
    const rangeGTE = document.querySelector('#GTE-input');
    const rangeSDS = document.querySelector('#SDS-input');
    const rangeNacl = document.querySelector('#Nacl-input');
    const rangeIso = document.querySelector('#iso-input');
    const rangeDis = document.querySelector('#dis-input');
    const inpTime = document.querySelector('#input-timer');
    const values = document.querySelector('#values-rpm');
    const valuesTimer = document.querySelector('#values-timer');
    const valueSDS = document.querySelector('#values-SDS');
    const valueGTE = document.querySelector('#values-GTE');
    const valueNacl = document.querySelector('#values-Nacl');
    const valueIso = document.querySelector('#values-iso');
    const valueDis = document.querySelector('#values-dis');
    const rotorContent = document.querySelector('.rotor-content');
    const disWater = document.querySelector('.dis-water');
    const start = document.querySelector('.start');
    const testTube = document.querySelector('.test-tube');
    const eppenDorf = document.querySelector('.eppen');
    const pallet = document.querySelector('#pallet');
    const bchaHua = document.querySelector('#bchaHua');
    const tronCol = document.querySelector('.container');
    const tronColFull = document.querySelector('.container-background');
    const forward = document.querySelector('.forward');
    const simImg = document.querySelector('#sim--img');
    const display2 = document.querySelectorAll('.disp2');
    const pippete = document.querySelector('.pippete');
    const display3 = document.querySelector('.disp3');
    const timeLabel = document.querySelector('.time-label');
    const labelTimer = document.querySelector('.timer-GTE');
    const dischard = document.querySelector('.discard');
    const display4 = document.querySelectorAll('.disp4');
    const cen = document.querySelector('.centri-cont');
    const gt = document.querySelectorAll('.GTE');
    const sd = document.querySelectorAll('.SDS');
    const na = document.querySelectorAll('.NACL');
    const iso = document.querySelectorAll('.ISO');
    const disw = document.querySelectorAll('.DISW');
    // const nacl= document.querySelector('.nacl-flask');
    // const batli= document.querySelector('.iso-beaker');
    let check1, check2, check3, check4, check5, check6 = false;
    display2.forEach(e => {
        e.style.display = 'none'
    });
    display4.forEach(e => {
        e.style.display = 'none'
    });

    pallet.style.display = 'none';
    timeLabel.style.display = 'none';
    bchaHua.style.display = 'none';
    tronCol.style.display = 'none';
    tronColFull.style.display = 'none';
    display3.style.display = 'none';
    forward.disabled = true;
    rangeGTE.disabled = true;
    let bhaiBhai = true;
    rangeGTE.style.cursor = 'not-allowed';
    let kyaHal = true;
    let selmonBhoi = false;
    let beti, tillu = false;
    const normalScreen = function () {
        document.exitFullscreen();
        simHead.classList.replace('sim--head-full', 'sim--head');
        fullSc.classList.replace('full-sc-click', 'full-sc');
        eColiSim.classList.replace('e-coli-sim-full', 'e-coli-sim');
        centrifuge.classList.replace('centrifuge-full', 'centrifuge')
        testTube.classList.replace('test-tube-full', 'test-tube');
        eppenDorf.classList.replace('eppen-full', 'eppen');
        tronCol.style.display = 'none';
        tronColFull.style.display = 'none';
        display3.style.display = 'none';
        display2.forEach(e => {
            e.style.display = 'none'
        });
        display4.forEach(e => {
            e.style.display = 'none'
        });
    }
    const controls = function () {
        const contr = [gt, sd, na, iso, disw];
        contr.forEach(e =>
            e.forEach(i =>
                i.style.display = 'none'
            ))
    };
    const fullScreen = function () {
        document.documentElement.requestFullscreen();
        simHead.classList.replace('sim--head', 'sim--head-full');
        fullSc.classList.replace('full-sc', 'full-sc-click');
        eColiSim.classList.replace('e-coli-sim', 'e-coli-sim-full');
        centrifuge.classList.replace('centrifuge', 'centrifuge-full');
        testTube.classList.replace('test-tube', 'test-tube-full');
        eppenDorf.classList.replace('eppen', 'eppen-full');
        tronCol.style.display = 'block';
        tronColFull.style.display = 'block';

        const change = function () {
            const hariOm = Draggable.create('.test-tube-full', {
                bounds: '.e-coli-sim-full',
                onDrag: function () {
                    cottonOut = function () {
                        gsap.to('#cotton', {
                            opacity: 0,
                        });
                    };
                    cottonOut();
                    if (this.hitTest(".eppen-full"))
                        TweenLite.to(this.target, 1, {
                            rotation: 110,
                            translateX: '85%',
                            translateY: '-50%',
                            changing: function () {

                            },
                            transOn: function () {
                                setTimeout(() => {
                                    gsap.to('.fill-rot', {
                                        rotate: -145,
                                        transformOrigin: '14px 15px left',
                                    });
                                }, 500);
                            },
                            tubKhali: function () {
                                setTimeout(() => {
                                    gsap.to('.owCulture', {
                                        translateY: '-180px',
                                        overFlow: 'visible',
                                        transformOrigin: 'center',
                                    });
                                    gsap.to('#fillingOw', {
                                        fill: '#FCFF5C',
                                        fillOpacity: 1,
                                    });
                                }, 1000);
                            },
                            tranOff: function () {
                                setTimeout(() => {
                                    gsap.to('.fill-rot', {
                                        rotate: 0,
                                    });

                                }, 2000);
                            },
                            backToNor: function () {
                                setTimeout(() => {
                                    gsap.to('.test-tube-full', {
                                        translateX: '0%',
                                        translateY: '0%',
                                        rotate: 0,
                                    });
                                }, 2500);
                            },
                            dragEppen: function () {
                                Draggable.create('.eppen-full', {
                                    bounds: '.e-coli-sim-full',
                                    onDrag: function () {
                                        if (this.hitTest(".centrifuge-full")) {
                                            TweenLite.to(this.target, 1, {
                                                openDkkn: function () {
                                                    setTimeout(() => {
                                                        gsap.to('.openDhkkn', {
                                                            translateX: '-20px',
                                                        });
                                                    }, 500);
                                                },
                                                drEpn: function () {
                                                    setTimeout(() => {
                                                        gsap.to('.eppen-full', {
                                                            display: 'none',
                                                        });
                                                    }, 100);
                                                },
                                                closeDkkt: function () {
                                                    setTimeout(() => {
                                                        gsap.to('.openDhkkn', {
                                                            translateX: '0px',
                                                        });
                                                    }, 1500);
                                                },
                                            }

                                            )
                                        }
                                    }
                                })
                            },
                        });
                },
                onDragEnd: function () {
                    hariOm[0].disable();
                }

            });
        };
        change();
    }
    const getFullScElement = function () {
        return document.fullscreenElement
            || document.webkitFullscreenElement
            || document.mozFullscreenElement
            || document.mozFullscreenElement;
    }
    const toggleFullsc = function () {
        if (getFullScElement()) normalScreen();
        else fullScreen();
    }
    fullSc.addEventListener('click', function () {
        controls();
        toggleFullsc();
    })
    // document.addEventListener('keydown',function(e){
    //     e.preventDefault();
    //     console.log(e);
    //     if(e.key==='F11')
    //     {
    //          if (e.key==='Escape') normalScreen();
    //          toggleFullsc();
    //         }
    // })
    switching.addEventListener('click', function (e) {
        e.preventDefault();

        if (switching.textContent === 'ON') {
            switching.textContent = 'OFF';
            toggleSwitch.classList.replace('btn-nor', 'btn-green');
            // rotorContent.textContent= `Rotor RPM ${values.textContent}`
        }
        else if (switching.textContent === 'OFF') {
            switching.textContent = 'ON';
            toggleSwitch.classList.replace('btn-green', 'btn-nor');
            rotorContent.textContent = "";
            // rotorContent.textContent= "jai ho"


        }

    });
    values.innerHTML = rangeSlider.value;
    rangeSlider.oninput = function () {
        values.innerHTML = this.value;
    }
    rangeSlider.addEventListener('click', function (e) {
        e.preventDefault();
        if (switching.textContent === "OFF") {
            rotorContent.textContent = `RPM ${values.textContent}`
        }
    })
    valueGTE.innerHTML = rangeGTE.value;
    rangeGTE.oninput = function () {
        valueGTE.innerHTML = this.value
    }
    valueSDS.innerHTML = rangeSDS.value;
    rangeSDS.oninput = function () {
        valueSDS.innerHTML = this.value
    }
    valueNacl.innerHTML = rangeNacl.value;
    rangeNacl.oninput = function () {
        valueNacl.innerHTML = this.value
    }
    valueIso.innerHTML = rangeIso.value;
    rangeIso.oninput = function () {
        valueIso.innerHTML = this.value
    }
    valueDis.innerHTML = rangeDis.value;
    rangeDis.oninput = function () {
        valueDis.innerHTML = this.value
    }
    valuesTimer.innerHTML = inpTime.value;
    inpTime.oninput = function () {
        valuesTimer.innerHTML = this.value
    }

    let kaluBhai = false;
    start.addEventListener('click', function () {
        if (switching.textContent === "OFF" && kaluBhai === false) {
            kaluBhai = true;
            gsap.to('.centri-rotor', {
                display: 'inline-block',
            });
            centrifuge.classList.add('shake-img');
            rotorContent.classList.add('shake-img');
            setTimeout(() => {
                gsap.to('.centri-rotor', {
                    display: 'none'
                });
            }, 4000);
            setTimeout(() => {
                gsap.to('.openDhkkn', {
                    translateX: '-20px',
                });
            }, 5000);
            gsap.to('.eppen-full', {
                translateX: '250px',
                translateY: '-154px',
            })
            setTimeout(() => {
                gsap.to('.eppen-full', {
                    display: 'inline-block',
                    fill: '#FCFF5C',
                });
                gsap.to('.sup-nen', {
                    display: 'inline-block',
                    fill: '#FCFF5C',
                });
                gsap.to('#bubbles', {
                    display: 'inline-block',
                });
            }, 5500);
            setTimeout(() => {
                gsap.to('.openDhkkn', {
                    translateX: '0px',
                });
            }, 8000);
            setTimeout(() => {
                gsap.to('.viewing', {
                    display: 'none',
                })
            }, 8500);
            setTimeout(() => {
                gsap.to('.discard', {
                    display: 'inline-block',
                })
            }, 9000);
            Draggable.create('.eppen-full', {
                bounds: '.e-coli-sim-full',
                onDrag: function () {
                    if (this.hitTest('.discard')) {
                        TweenLite.to(this.target, 1, {
                            rotation: 110,
                            thisIsLast: function () {
                                setTimeout(() => {
                                    gsap.to('.fill-rot', {
                                        rotate: -145,
                                        transformOrigin: '14px 15px left',
                                    });
                                }, 500);
                                setTimeout(() => {
                                    gsap.to('#bubbles', {
                                        translateY: '-180px',
                                    });
                                    gsap.to('.sup-nen', {
                                        translateY: '-300px',
                                        opacity: 0,
                                    });
                                    gsap.to('#fillingOw', {
                                        translateY: '-400px',
                                        display: 'none',
                                    });
                                }, 1000);
                                setTimeout(() => {

                                    gsap.to('#bubbles', {
                                        opacity: 0,
                                        overFlow: 'visible',
                                        transformOrigin: 'center',
                                    });
                                    gsap.to('#bchaHua', {
                                        display: 'inline-block',
                                    });
                                    gsap.to('#pallet', {
                                        display: 'inline-block',
                                    })
                                    // fillOw.classList.add('linear-gd');

                                }, 1500);

                                setTimeout(() => {
                                    gsap.to('.eppen-full', {
                                        rotate: 0,
                                    });
                                }, 3000);
                                setTimeout(() => {
                                    gsap.to('.fill-rot', {
                                        rotate: 0,
                                        transformOrigin: '14px 15px left',
                                    });
                                }, 3500);
                                setTimeout(() => {
                                    gsap.to('.discard', {
                                        display: 'none',
                                    });
                                    gsap.to('.forward', {
                                        cursor: 'pointer',
                                        background: 'white',
                                    })
                                }, 4000);
                                forward.disabled = false;
                                check1 = true;
                                gt.forEach(e =>
                                    e.style.display = 'none');

                            }
                        });
                    }
                }
            })

        }
    });
    forward.addEventListener('click', function (e) {
        cen.style.display = 'none'
        dischard.style.display = 'none';
        gsap.to('.centri-cont', {
            display: 'none'
        });

        if (check1 === true) {
            gt.forEach(e =>
                e.style.display = 'inline-block');
            rangeGTE.disabled = false;
            rangeGTE.style.cursor = 'pointer';
            forward.disabled = true;
            e.preventDefault();
            gsap.to('#baadme', {
                fillOpacity: 0,
            })
            gsap.to('.eppen-full', {
                translateX: '0%',
                translateY: '0%',
            });
            gsap.to('.test-tube-full', {
                display: 'none',
            });
            simImg.src = 'images/background2.png';
            // simImg.classList.add('img2');
            display2.forEach(e => {
                e.style.display = 'inline-block';
            });
            gsap.to('.discard', {
                display: 'none',
            });
            const step21 = function () {
                Draggable.create('.pippete', {
                    bounds: '.bchKrhna',
                    onDrag: function () {
                        gsap.to('.pippete', {
                            rotate: 0,
                        });
                        if (this.hitTest('.flask')) {
                            kyaHal = false;
                            beti = true;
                            TweenLite.to(this.target, 1, {
                                step2: function () {
                                    setTimeout(() => {
                                        gsap.to('#pehle', {
                                            opacity: 0,
                                        });
                                        gsap.to('#baadme', {
                                            fillOpacity: 1,
                                        })
                                    }, 1000);
                                    setTimeout(() => {
                                        gsap.to('#fillPipe', {
                                            fill: '#00FFE0',
                                            fillOpacity: 1,
                                        });

                                    }, 2000);

                                }
                            })
                        }
                        else if (this.hitTest('.eppen-full') && (kyaHal === false) && (beti === true)) {
                            TweenLite.to(this.target, 1, {
                                step22: function () {
                                    beti = false;
                                    setTimeout(() => {
                                        gsap.to('.fill-rot', {
                                            rotate: -145,
                                            transformOrigin: '14px 15px left',
                                        });
                                    }, 500);


                                    setTimeout(() => {
                                        gsap.to('#fillPipe', {
                                            display: 'none',
                                        });
                                    }, 1000);
                                    setTimeout(() => {
                                        gsap.to('#GTE-solution', {
                                            translateY: '0%',
                                            // fill: '#00FFE0',
                                            display: 'inline-block',
                                            fill: '#64FFE3',
                                            fillOpacity: 1,
                                        })
                                        gsap.to('#fillPipe', {
                                            fillOpacity: 0,
                                        })

                                        kyaHal = true;
                                    }, 1500);

                                    setTimeout(() => {
                                        gsap.to('.fill-rot', {
                                            rotate: 0,
                                        });
                                        gsap.to('.time-label', {
                                            display: 'inline-block',
                                        });
                                        check1 = false;
                                    }, 2500);
                                    bhaiBhai = false;
                                    if (bhaiBhai === false) {
                                        const logOutTimer = function () {
                                            let time = 10;
                                            const tick = function () {
                                                labelTimer.textContent = time;
                                                if (time === 0) {
                                                    check2 = true;
                                                    forward.disabled = false;
                                                    gsap.to('.time-label', {
                                                        display: 'none',
                                                    });
                                                    clearInterval(timer);

                                                }
                                                time--;
                                            };
                                            const timer = setInterval(tick, 1000);
                                            tick();
                                            // return timer;
                                        }
                                        logOutTimer();
                                    }

                                }
                            });
                        }
                    }
                });
            };
            step21();
        } else if (check2 === true) {
            gsap.to('#pallet', {
                display: 'none',
            })
            kyaHal = true;
            gt.forEach(e =>
                e.style.display = 'none');

            sd.forEach(e =>
                e.style.display = 'inline-block');
            display3.style.display = 'inline-block';
            gsap.to('#baadmeSDS', {
                fillOpacity: 0,
            });
            gsap.to('#pehleSDS', {
                fillOpacity: 0.5,
            });
            gsap.to('.flask', {
                display: 'none'
            });
            gsap.to('.eppen-full', {
                translateX: '0%',
                translateY: '0%',
            });
            gsap.to('.pippete', {
                rotate: 90,
                translateX: '0%',
                translateY: '0%',
            });
            Draggable.create('.pippete', {
                bounds: '.bchKrhna',
                onDrag: function () {
                    const kalua = function () {
                        gsap.to('.pippete', {
                            rotate: 0,
                        })
                    }; kalua();
                    if (this.hitTest('.SDS-flask')) {
                        kyaHal = false;
                        TweenLite.to(this.target, 1, {
                            bbG: function () {
                                setTimeout(() => {
                                    gsap.to('#pehleSDS', {
                                        fillOpacity: 0
                                    });
                                    gsap.to('#baadmeSDS', {
                                        fillOpacity: 1
                                    });
                                    gsap.to('#fillPipe', {
                                        display: 'inline-block',
                                        fillOpacity: 1,
                                        fill: '#00FFE0',
                                    });
                                }, 1000);

                            }
                        })
                    }
                    else if (kyaHal === false && this.hitTest('.eppen-full')) {
                        setTimeout(() => {
                            gsap.to('.fill-rot', {
                                rotate: -145,
                            });
                        }, 1000);
                        setTimeout(() => {
                            gsap.to('#SDS-solution', {
                                display: 'inline-block',
                                fill: '#00FFE0',
                            })
                        }, 1500);
                        setTimeout(() => {
                            gsap.to('.fill-rot', {
                                rotate: 0,
                            })
                            gsap.to('#fillPipe', {
                                display: 'none',
                            })
                            bhaiBhai = true;
                            // kyaHal= true;
                        }, 2000);
                        // setTimeout(() => {
                        // if (bhaiBhai === true) {
                        // }
                        setTimeout(() => {
                            const logOutTimer = function () {
                                gsap.to('.time-label', {
                                    display: 'inline-block',
                                });
                                let time = 10;
                                const tick = function () {
                                    labelTimer.textContent = time;
                                    if (time === 0) {
                                        forward.disabled = false;
                                        clearInterval(timer);
                                        gsap.to('.time-label', {
                                            display: 'none',
                                        });

                                    }
                                    time--;
                                };
                                const timer = setInterval(tick, 1000);
                                tick();
                                bhaiBhai = false;
                                // return timer;
                            }
                            logOutTimer();
                        }, 2100);
                        // }, 3000);    
                        check2 = false;
                        check3 = true;
                    }
                }
            })
        }
        else if (check3 === true) {
            gt.forEach(e =>
                e.style.display = 'none');
            sd.forEach(e =>
                e.style.display = 'none');
            na.forEach(e =>
                e.style.display = 'inline-block');
            iso.forEach(e =>
                e.style.display = 'inline-block');
            let yoyo = false;
            let deepak = false;
            kyaHal = true;
            gsap.to('#baadmeNMK', {
                display: 'none',
            });
            display3.style.display = 'none';
            display4.forEach(e =>
                e.style.display = 'inline-block'
            );
            gsap.to('.pippete', {
                rotate: 90,
                translateX: '0%',
                translateY: '0%',
            });
            Draggable.create('.pippete', {
                bounds: '.bchKrhna',
                onDrag: function () {
                    const munni = function () {
                        gsap.to('.pippete', {
                            rotate: 0,
                        });
                    }; munni();
                    if (this.hitTest('.nacl-flask')) {
                        TweenLite.to(this.target, 1, {
                            babuJi: function () {
                                setTimeout(() => {
                                    gsap.to('#pehleNMK', {
                                        display: 'none',
                                    });
                                    gsap.to('#fillPipe', {
                                        display: 'inline-block',
                                    });
                                }, 1000);
                                setTimeout(() => {
                                    gsap.to('#baadmeNMK', {
                                        display: 'inline-block',
                                    });
                                    kyaHal = false;
                                    tillu = true;
                                }, 1500);

                            },
                        }
                        )
                    }
                    else if (this.hitTest('.eppen-full') && tillu === true && yoyo === false) {
                        //  tillu= false;
                        yoyo = true;
                        // TweenLite.to(this.target,1,{
                        setTimeout(() => {
                            gsap.to('.fill-rot', {
                                rotate: -145,
                            });
                        }, 1000);
                        setTimeout(() => {
                            gsap.to('#Nacl-solution', {
                                display: 'inline-block',
                                fill: '#00FFE0',
                            })
                        }, 1500);
                        setTimeout(() => {
                            gsap.to('.fill-rot', {
                                rotate: 0,
                            })
                            gsap.to('#fillPipe', {
                                display: 'none',
                            });
                        }, 2000);
                        selmonBhoi = true;
                        kyaHal = true;
                    }
                    if (this.hitTest('.iso-beaker') && selmonBhoi === true) {
                        setTimeout(() => {
                            gsap.to('#fillPipe', {
                                display: 'inline-block',
                            });
                            selmonBhoi = false;
                            deepak = true;
                        }, 1000);

                        kyaHal = true;
                    } else if (this.hitTest('.eppen-full') && selmonBhoi === false && deepak === true) {
                        deepak = false;
                        selmonBhoi = true;
                        setTimeout(() => {
                            gsap.to('.fill-rot', {
                                rotate: -145,
                            });
                            yoyo = false;
                            // yoyo= true;
                            // selmonBhoi= false;
                        }, 1000);
                        setTimeout(() => {
                            gsap.to('#fillPipe', {
                                display: 'none',
                            });
                            gsap.to('#Iso-solution', {
                                fill: '#00FFE0',
                                display: 'inline-block',
                            })
                        }, 1500);
                        setTimeout(() => {
                            gsap.to('.fill-rot', {
                                rotate: 0,
                            })
                        }, 2000);
                    };
                    document.querySelector('.invt').addEventListener('click', function () {
                        gsap.to('.eppen-full', {
                            translateX: '100px',
                            translateY: '-200px',
                        });
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 30,
                            });

                        }, 2000);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 60,
                            });
                            gsap.to('.ghummi', {
                                fill: '#00FFE0',
                                fillOpacity: '0.3',
                            })

                        }, 2200);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 90,
                            });

                        }, 2400);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 120,
                            });

                        }, 2600);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 150,
                            });

                        }, 2800);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 180,
                            });

                        }, 3000);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 150,
                            });

                        }, 3200);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 120,
                            });

                        }, 3400);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 90,
                            });

                        }, 3600);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 60,
                            });

                        }, 3800);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 30,
                            });

                        }, 4000);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 0,
                            });

                        }, 4200);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 30,
                            });

                        }, 5000);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 60,
                            });

                        }, 5200);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 90,
                            });

                        }, 5400);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 120,
                            });

                        }, 5600);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 150,
                            });

                        }, 5800);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 180,
                            });

                        }, 6000);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 150,
                            });

                        }, 6200);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 120,
                            });

                        }, 6400);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 90,
                            });

                        }, 6600);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 60,
                            });

                        }, 6800);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 30,
                            });

                        }, 7000);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                rotate: 0,
                            });
                            gsap.to('.ghummi', {
                                fill: 'url(#paint0_linear_1_3)',
                                fillOpacity: 1,
                            });
                            gsap.to('#dna', {
                                display: 'inline-block',
                            });
                        }, 7200);
                        setTimeout(() => {
                            gsap.to('.eppen-full', {
                                translateX:'0%',
                                translateY:'0%',
                            });
                        }, 7500);
                    })
                }
            });
            check3 = false;
            check4 = true;
        }
        else if (check4 === true) {
            switching.textContent = 'ON';
            toggleSwitch.classList.replace('btn-green', 'btn-nor');
            rotorContent.textContent = "";
            centrifuge.classList.remove('shake-img');
            rotorContent.classList.remove('shake-img');
            gsap.to('.pippete', {
                display: 'none',
            })
            display4.forEach(el => {
                el.style.display = 'none'
            });
            gsap.to('.centri-cont', {
                display: 'inline-block'
            });
            na.forEach(e =>
                e.style.display = 'none');
            iso.forEach(e =>
                e.style.display = 'none');
            gsap.to('.viewing', {
                display: 'inline-block',
            });
            Draggable.create('.eppen-full', {
                bounds: '.bchKrhna',
                onDrag: function () {
                    if (this.hitTest('.centrifuge-full')) {
                        TweenLite.to(this.target, 1, {
                            jindaHo: function () {
                                setTimeout(() => {
                                    gsap.to('.openDhkkn', {
                                        translateX: '-20px',
                                    });
                                }, 200);
                                setTimeout(() => {
                                    gsap.to('.eppen-full', {
                                        display: 'none',
                                    });
                                }, 400);
                                setTimeout(() => {
                                    gsap.to('.openDhkkn', {
                                        translateX: '0px',
                                    });
                                }, 1000);
                                setTimeout(() => {
                                    gsap.to('.eppen-full', {
                                        translateX: '0%',
                                        translateY: '0%',
                                    });
                                }, 4000);
                            },
                            bcchaBhai: function () {
                                start.addEventListener('click', function () {
                                    if (kaluBhai === true && switching.textContent === 'OFF') {
                                        gsap.to('.centri-rotor', {
                                            display: 'inline-block',
                                        });
                                        centrifuge.classList.add('shake-img');
                                        rotorContent.classList.add('shake-img');
                                        setTimeout(() => {
                                            gsap.to('.eppen-full', {
                                                translateX: '250px',
                                                translateY: '-154px',
                                            });
                                            gsap.to('.centri-rotor', {
                                                display: 'none'
                                            });
                                        }, 4000);
                                        setTimeout(() => {
                                            gsap.to('.openDhkkn', {
                                                translateX: '-20px',
                                            });
                                        }, 5000);
                                        setTimeout(() => {
                                            gsap.to('.eppen-full', {
                                                display: 'inline-block',
                                            });
                                            gsap.to('#Distilled-solution', {
                                                display: 'inline-block',
                                                fill: '#00FFE0',
                                                fillOpacity: 0.75,
                                            })
                                            gsap.to('.sup-nen', {
                                                translateX: '0%',
                                                translateY: '0%',
                                                fill: '#00FFE0',
                                                opacity: 1,
                                            });
                                            gsap.to('#dna', {
                                                display: 'inline-block',
                                                opacity: 1,
                                            })
                                        }, 6000);
                                        setTimeout(() => {
                                            gsap.to('.openDhkkn', {
                                                translateX: '0px',
                                            });
                                        }, 8000);
                                        setTimeout(() => {
                                            gsap.to('.viewing', {
                                                display: 'none',
                                            })
                                        }, 8500);
                                        setTimeout(() => {
                                            gsap.to('.discard', {
                                                display: 'inline-block',
                                            })
                                        }, 9000);
                                        Draggable.create('.eppen-full', {
                                            bounds: '.e-coli-sim-full',
                                            onDrag: function () {
                                                if (this.hitTest('.discard')) {
                                                    TweenLite.to(this.target, 1, {
                                                        rotation: 110,
                                                        thisIsLast: function () {
                                                            setTimeout(() => {
                                                                gsap.to('.fill-rot', {
                                                                    rotate: -145,
                                                                    transformOrigin: '14px 15px left',
                                                                });
                                                            }, 500);
                                                            setTimeout(() => {
                                                                // gsap.to('#bubbles', {
                                                                //     translateY: '-180px',
                                                                //     opacity: 0.3,
                                                                // });
                                                                gsap.to('.pippete', {
                                                                    translateX: '0%',
                                                                    translateY: '0%',
                                                                    });
                                                                gsap.to('.sup-nen', {
                                                                    translateY: '-300px',
                                                                    opacity: 0,
                                                                });
                                                                gsap.to('#Iso-solution', {
                                                                    translateY: '-320px',
                                                                    opacity: 0,

                                                                });
                                                                gsap.to('#Distilled-solution', {
                                                                    translateY: '-320px',
                                                                    opacity: 0,

                                                                });
                                                                gsap.to('#GTE-solution', {
                                                                    translateY: '-320px',
                                                                    opacity: 0,

                                                                });
                                                                gsap.to('#Nacl-solution', {
                                                                    translateY: '-320px',
                                                                    opacity: 0,

                                                                });
                                                                gsap.to('#SDS-solution', {
                                                                    translateY: '-320px',
                                                                    opacity: 0,

                                                                });

                                                                gsap.to('#fillingOw', {
                                                                    translateY: '-400px',
                                                                    display: 'none',
                                                                });
                                                                gsap.to('#bchaHua', {
                                                                    translateY: '-410px',
                                                                })
                                                            }, 2000);
                                                            setTimeout(() => {

                                                                gsap.to('#bubbles', {
                                                                    opacity: 0,
                                                                    overFlow: 'visible',
                                                                    transformOrigin: 'center',
                                                                });
                                                                gsap.to('#bchaHua', {
                                                                    display: 'inline-block',
                                                                    opacity: 0,
                                                                });
                                                                // fillOw.classList.add('linear-gd');

                                                            }, 1500);

                                                            setTimeout(() => {
                                                                gsap.to('.eppen-full', {
                                                                    rotate: 0,
                                                                });
                                                            }, 3000);
                                                            setTimeout(() => {
                                                                gsap.to('.fill-rot', {
                                                                    rotate: 0,
                                                                    transformOrigin: '14px 15px left',
                                                                });
                                                            }, 3500);
                                                            setTimeout(() => {
                                                                gsap.to('.fill-rot', {
                                                                    rotate: -145,
                                                                })
                                                                gsap.to('.eppen-full', {
                                                                    translateY: '0%',
                                                                    translateX: '0%',
                                                                });
                                                                gsap.to('#dna', {
                                                                    display: 'inline-block',
                                                                })
                                                            }, 5000);
                                                        }
                                                    });
                                                }
                                            }
                                        });


                                    }
                                })
                            }
                        })

                    }
                    check4 = false;
                    check5 = true;
                }
            })
        } else if (check5 === true) {
            disw.forEach(e =>
                e.style.display = 'inline-block');
            gsap.to('.forward', {
                display: 'none',
            });
            gsap.to('.dis-water', {
                display: 'inline-block',
            });
            gsap.to('.pippete', {
                display: 'inline-block',
                translateX: '0%',
                translateY: '0%',
                rotate: 90,
            });
            let chandu = false;
            Draggable.create('.pippete', {
                bounds: '.e-coli-sim-full',
                onDrag: function () {
                    gsap.to('.pippete',{
                        rotate: 0,
                    })
                    if (this.hitTest('.dis-water')) {
                       TweenLite.to(this.target,1,{
                           sweety: function(){
                            gsap.to('#pehlePani', {
                                display: 'none',
                            });
                            gsap.to('#fillPipe', {
                                display: 'inline-block',
                            });
                            gsap.to('#badmePani', {
                                display: 'inline-block',
                            });
                           }
                       })
                        chandu = true;
                    } else if (chandu === true && this.hitTest('.eppen-full')) {
                        TweenLite.to(this.target,1,{
                            sundar: function(){
                                chandu = false;
                                gsap.to('#fillingOw', {
                                    translateY: '0%',
                                    display: 'inline-block',
                                    fill: '#00FFE0',
                                    fillOpacity: 1,
                                });
                                gsap.to('#fillPipe', {
                                    display: 'none',
                                });
                            }
                        })
                    };
                }
            })
        }
    })
});


