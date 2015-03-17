# FreeJALduino #

![http://lh5.ggpht.com/_Z3E9awpWQh4/TPQckc67b_I/AAAAAAAAJLQ/WGoQd2ixMs8/s640/freejalduino-china.jpg](http://lh5.ggpht.com/_Z3E9awpWQh4/TPQckc67b_I/AAAAAAAAJLQ/WGoQd2ixMs8/s640/freejalduino-china.jpg)

It can be programmed in Arduino language via Pinguino IDE of Jean-Pierre Mandon, JAL language, Swordfish Basic, Proton+ Basic or any other PIC language.

> (BTW, anyone knows what is happening with Swordfish Basic?)

### JAL code example ###
```
include freejalduino4 -- the board pinout definitions, PICtarget, clock and boot

-- delay library

include delay



enable_digital_io() -- all pins are now digital



D13_direction = OUTPUT -- set pin RC2/D13 as output



forever loop

  D13 = HIGH

  delay_1ms(250) -- delay 250 milliseconds

  D13 = LOW

  delay_1ms(250)

end loop

--
```

<a href='http://www.youtube.com/watch?feature=player_embedded&v=Tfny55YRxog' target='_blank'><img src='http://img.youtube.com/vi/Tfny55YRxog/0.jpg' width='425' height=344 /></a>

http://freejalduino.blogspot.com/2010/07/freejalduino-rework-is-ready.html