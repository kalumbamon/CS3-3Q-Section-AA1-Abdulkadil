const pi = 3.14;
let r = 6378000;

let circumferenceofasphere = 2*pi*r;
let surfaceareaofasphere = 4*pi*r**2;
let volumeofasphere = 4/3*pi*r**3;

document.write("The radius of the sphere is " + r + ".");
document.write('<br><br>');
document.write("The circumference is " +  circumferenceofasphere + ".");
document.write('<br><br>');
document.write("The surface area is " + surfaceareaofasphere + ".");
document.write('<br><br>');
document.write("The volume is " + volumeofasphere + ".");
 