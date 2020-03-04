# CPE 1040 - Spring 2020

## Assignment 5: Transistors

Author: Grant, Brendan  
Last updated: 2020-03-03  

### 1. NPN Transistor Circuit (2N3904)

*Voltage Measurements:*

| Location      | Switch Off    | Switch On  |
|:-------------:|:-------------:|:----------:|
| Across R (R<sub>C</sub>)     | 0.005mV       | 1.003V     |
| At Collector (C) | 0.3mV         | 38.7mV     |
| At Base (B)      | -0.032mV      | 0.691V     |
| At Emitter (E)   | -0.000mV      | 1.4mV      |


*Current Measurements:*

| Location      | Switch Off    | Switch On  |
|:-------------:|:-------------:|:----------:|
| At Collector (I<sub>C</sub>)  | 0.002µA       | 3.052mA    |
| At Base (I<sub>B</sub>)      | 0.000µA       | 3.371mA    |
| At Emitter (I<sub>E</sub>)   | 0.000µA       | 0.315mA    |

These three currents are approximately zero when the input switch is off and become substantially higher when the switch is on. In the on state, the base and collector currents are much higher than the emitter current.

I<sub>C</sub> / I<sub>B</sub> * 100 = 90.5%

![alt text](images/npn-diagram.jpg "NPN Circuit Diagram")

### 2. PNP Transistor Circuit (2N3906)

*Voltage Measurements:*

| Location      | Switch Off    | Switch On  |
|:-------------:|:-------------:|:----------:|
| Across R (R<sub>C</sub>)     | 0.975V        | -0.038mV   |
| At Collector (C) | 3.750V        | 1.033V     |
| At Base (B)      | 4.435V        | 0.557V     |
| At Emitter (E)   | 4.546V        | 0.558V     |


*Current Measurements:*

| Location      | Switch Off    | Switch On  |
|:-------------:|:-------------:|:----------:|
| At Collector (I<sub>C</sub>) | 11.14µA       | 0.001µA    |
| At Base (I<sub>B</sub>)      | 2.968mA       | 0.166µA    |
| At Emitter (I<sub>E</sub>)   | 2.964mA       | 0.000µA    |

These three currents have the opposite behavior of the NPN transistor: they are zero when the input switch is on and become substantially higher when the switch is off. In the off state, the base and emitter currents are much higher than the collector current.

I<sub>C</sub> / I<sub>B</sub> * 100 = 0.4%

![alt text](images/pnp-diagram.jpg "PNP Circuit Diagram")

### 3. Soil Sensor

1. The soil moisture probe uses an NPN transistor (the 2N3904 model tested above), one 100Ω resistor, and one 10KΩ resistor. Current flows towards the probes, but on the probe1 side it is blocked as it enters the collector side of the transistor. On the probe2 side, current flows through the 100Ω resistor and through the probe2 contacts. Current from the probe2 side then reaches the probe1 side which powers the base of the transistor. As a result, current can flow through the transistor to the signal contacts and finally through the 10KΩ resistor to ground. The transistor allows the current flowing through the soil to be amplified by the input power.
