Whats Here To GPRMC
===================

A simple no frills tool to generate [GPRMC Sentences](http://aprs.gids.nl/nmea/#rmc) using Google Maps.

I wrote this to automate the tedious manual process of generating "pseudo" GPRMC sentences which is as follows.
- Determine coordinates using Google Maps whats here function
- Convert the coordinates to degrees minutes format used in GPRMC sentence using one of the many online tools available
- Manually create the Gps Sentence by hand using the coordintes

If your wondering  why would you want to generate GPRMC sentences -
I needed to generate "Gold Data" i.e to find the correct coordinates (according to Google Maps) 
for compartive testing and studies in order to determine the accuracy of a Gps based embedded device visually and computationally
using tools which accepted only GPRMC sentences. 

The only fields in the sentence that are soft-coded are the Latitude, Longitude, Date and Time.
The code will be need to be updated to add the correct checksum etc if that is required.

![Whats Here To GPRMC Screenshot](https://github.com/murjay/Whats-Here-To-GPRMC/raw/master/doc/screenshot.png)

Usage
-----

1. Add a date in UTC format to the date text box e.g 2nd of April 2013 ==> 020413 (There is no error checking, so get it right!)
2. Add a time in UTC format to the time text box e.g 22:54:46 ==> 225446   (There is no error checking, so get it right!)
3. Click on the map to add points


License
-------
Copyright © 2013 Jonah Murphy

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
