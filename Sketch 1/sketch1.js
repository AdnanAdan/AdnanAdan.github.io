function setup() {
  createCanvas(450, 600);
}

function draw() {
  background('#a0c0db');
  noFill();
  noStroke();

  //Top Left Quad Stack Starts

  fill('#35383C');
  quad(31, 13, 76, 37, 38, 56, -7, 31);

  fill('#41424C');
  quad(36, -8, 61, 16, 35, 36, 2, 12)
  //Top Left Quad Stack ENds

  //Top Right Circle Stack Starts

  fill('#5B4E51');
  beginShape();
  vertex(407, 59);
  bezierVertex(407, 59, 424, 57, 425, 81);
  bezierVertex(425, 81, 423, 96, 402, 97);
  bezierVertex(402, 97, 388, 98, 382, 80);
  bezierVertex(382, 80, 382, 58, 407, 59);
  endShape();

  fill('#41424C');
  beginShape();
  vertex(409, 18);
  bezierVertex(409, 18, 429, 19, 432, 46);
  bezierVertex(432, 46, 433, 70, 408, 74);
  bezierVertex(408, 74, 385, 75, 383, 45);
  bezierVertex(383, 45, 383, 19, 409, 18);
  endShape();

  fill('#3D444B');
  beginShape();
  vertex(415, 5);
  bezierVertex(415, 5, 429, 5, 432, 21);
  bezierVertex(432, 21, 437, 36, 415, 42);
  bezierVertex(415, 42, 397, 42, 396, 21);
  bezierVertex(396, 21, 397, 5, 415, 5);
  endShape();

  //Top Right Circle Stack Ends

  //Top Middle Quad Stack Starts

  fill('#5B4E51');
  quad(294, 41, 334, 76, 292, 122, 253, 75);

  fill('#171F25');
  quad(293, 14, 319, 56, 288, 82, 255, 47);

  fill('#5B4E51');
  quad(291, -1, 310, 24, 289, 48, 264, 16);

  //Top Middle Quad Stack Ends

  //Top Left Circle Stack Starts

  fill('#2C2F34');
  beginShape();
  vertex(160, 86);
  bezierVertex(160, 86, 180, 85, 184, 107);
  bezierVertex(184, 107, 182, 125, 165, 127);
  bezierVertex(165, 127, 143, 131, 141, 109);
  bezierVertex(141, 109, 140, 93, 160, 86);
  endShape();

  fill('#243142');
  beginShape();
  vertex(159, 55);
  bezierVertex(182, 55, 186, 72, 186, 72);
  bezierVertex(189, 95, 164, 101, 164, 101);
  bezierVertex(137, 101, 136, 82, 136, 82);
  bezierVertex(133, 58, 159, 55, 159, 55);
  endShape();

  fill('#20232A');
  beginShape();
  vertex(152, 31);
  bezierVertex(178, 35, 176, 49, 176, 49);
  bezierVertex(179, 76, 159, 81, 159, 81);
  bezierVertex(126, 81, 130, 53, 130, 53);
  bezierVertex(132, 33, 152, 31, 152, 31);
  endShape();

  fill('#243142');
  beginShape();
  vertex(158, 9);
  bezierVertex(177, 11, 176, 26, 176, 26);
  bezierVertex(176, 47, 159, 48, 159, 48);
  bezierVertex(133, 50, 136, 28, 136, 28);
  bezierVertex(135, 10, 158, 9, 158, 9);
  endShape();

  //Top Left Circle Stack Ends

  //Top Right Quad Stack Starts

  fill('#575E6D');
  quad(412, 169, 449, 193, 419, 220, 385, 188);

  fill('#242C2F');
  quad(413, 127, 449, 149, 415, 182, 380, 159);

  fill('#26272D');
  quad(419, 107, 442, 122, 418, 149, 391, 120);

  fill('#575E6D');
  quad(422, 88, 439, 107, 419, 126, 404, 101);

  //Top Right Quad Stack Ends

  //Top Tower Circles Start

  fill('#E9F9FF');
  beginShape();
  vertex(182, 230);
  bezierVertex(209, 230, 210, 254, 210, 254);
  bezierVertex(209, 278, 186, 285, 186, 285);
  bezierVertex(155, 286, 154, 260, 154, 260);
  bezierVertex(152, 232, 182, 230, 182, 230);
  endShape();

  fill('#E88460');
  beginShape();
  vertex(190, 207);
  bezierVertex(213, 207, 213, 225, 213, 225);
  bezierVertex(213, 244, 193, 249, 193, 249);
  bezierVertex(167, 250, 166, 230, 166, 230);
  bezierVertex(165, 209, 190, 207, 190, 207);
  endShape();

  fill('#131D2C');
  beginShape();
  vertex(189, 169);
  bezierVertex(214, 169, 220, 202, 220, 202);
  bezierVertex(218, 227, 192, 229, 192, 229);
  bezierVertex(162, 225, 163, 199, 163, 199);
  bezierVertex(162, 178, 189, 169, 189, 169);
  endShape();

  fill('#E9F9FF');
  beginShape();
  vertex(211, 155);
  bezierVertex(231, 154, 235, 176, 235, 176);
  bezierVertex(238, 198, 211, 199, 211, 199);
  bezierVertex(189, 204, 186, 175, 186, 175);
  bezierVertex(183, 156, 211, 155, 211, 155);
  endShape();

  fill('#67504E');
  beginShape();
  vertex(217, 105);
  bezierVertex(253, 110, 253, 133, 253, 133);
  bezierVertex(256, 171, 218, 173, 218, 173);
  bezierVertex(179, 171, 176, 138, 176, 138);
  bezierVertex(176, 99, 217, 105, 217, 105);
  endShape();

  fill('#E88460');
  beginShape();
  vertex(221, 91);
  bezierVertex(221, 91, 244, 89, 247, 110);
  bezierVertex(247, 110, 249, 135, 218, 138);
  bezierVertex(218, 138, 188, 139, 191, 108);
  bezierVertex(191, 108, 189, 92, 221, 91);
  endShape();

  fill('#E9F9FF');
  beginShape();
  vertex(220,70);
  bezierVertex(220, 70, 249, 67, 253, 82);
  bezierVertex(253, 82, 258, 108, 222, 113);
  bezierVertex(222, 113, 188, 112, 187, 85);
  bezierVertex(187, 85, 186, 70, 220, 70);
  endShape();

  fill('#E88460');
  beginShape();
  vertex(219, 39);
  bezierVertex(245, 38, 249, 62, 249, 62);
  bezierVertex(250, 85, 219, 89, 219, 89);
  bezierVertex(193, 86, 190, 67, 190, 67);
  bezierVertex(189, 36, 219, 39, 219, 39);
  endShape();

  fill('#EAD6DB');
  beginShape();
  vertex(221, 31);
  bezierVertex(241, 30, 241, 48, 241, 48);
  bezierVertex(243, 64, 221, 67, 221, 67);
  bezierVertex(197, 66, 199, 51, 199, 51);
  bezierVertex(197, 30, 221, 31, 221, 31);
  endShape();

  fill('#E9F9FF');
  beginShape();
  vertex(218, 31);
  bezierVertex(232, 30, 232, 38, 232, 38);
  bezierVertex(234, 49, 221, 52, 221, 52);
  bezierVertex(208, 54, 206, 44, 206, 44);
  bezierVertex(205, 32, 218, 31, 218, 31);
  endShape();

  //Top Tower Circles End


  //Middle Left Quad Stack Starts

  fill('#293347');
  quad(17, 258, 66, 278, 34, 324, -15, 283);

  fill('#293347');
  quad(11, 229, 47, 240, 20, 287, -17, 250);

  fill('#3B3139');
  quad(1, 195, 37, 215, 4, 246, -24, 220);

  fill('#293347');
  quad(1, 168, 28, 201, 4, 224, -20, 195);

  //Middle Left Quad Stack Starts

  //Top Bell Shape Quad Starts

  fill('#E3D3E4');
  quad(344, 260, 395, 289, 320, 337, 296, 283);

  fill('#16212F');
  quad(346, 237, 380, 270, 333, 299, 310, 255);

  fill('#E3D3E4');
  quad(350, 188, 396, 218, 339, 269, 314, 219);

  fill('#6B535A');
  quad(342, 148, 414, 174, 349, 236, 306, 183);

  fill('#E0503D');
  quad(337, 112, 393, 148, 352, 195, 301, 146);

  fill('#C77F6D');
  beginShape();
  vertex(340, 64);
  bezierVertex(362, 64, 361, 96, 391, 120);
  bezierVertex(391, 120, 338, 155, 338, 155);
  bezierVertex(338, 155, 286, 121, 286, 121);
  bezierVertex(305, 119, 307, 65, 340, 64);
  endShape();

  fill('#CDE8FF');
  beginShape();
  vertex(340, 56);
  bezierVertex(367, 58, 363, 91, 378, 94);
  bezierVertex(378, 94, 339, 126, 339, 126);
  bezierVertex(339, 126, 296, 92, 296, 92);
  bezierVertex(313, 87, 314, 58, 340, 56);
  endShape();

  fill('#E3D3E4');
  beginShape();
  vertex(340, 51);
  bezierVertex(361, 54, 358, 67, 371, 74);
  bezierVertex(371, 74, 344, 98, 344, 98);
  bezierVertex(344, 98, 308, 64, 308, 64);
  bezierVertex(319, 63, 319, 51, 340, 51);
  endShape();

  fill('#CDE8FF');
  quad(339, 43, 353, 56, 338, 70, 324, 55);

  //Top Bell Shape Quad Ends

  //Top Box Middle Short Stack Starts

  fill('#161920');
  quad(225, 327, 261, 355, 234, 384, 195, 342);

  fill('#1D2227');
  beginShape();
  vertex(232, 282);
  vertex(260, 281);
  vertex(261, 327);
  vertex(227, 343);
  vertex(193, 302);
  vertex(232, 282);
  endShape();

  fill('#2D262B');
  beginShape();
  vertex(233, 252);
  vertex(264, 255);
  vertex(261, 300);
  vertex(214, 304);
  vertex(200, 261);
  vertex(233, 252);
  endShape();

  fill('#1F2937');
  beginShape();
  vertex(217, 231);
  vertex(273, 225);
  vertex(274, 274);
  vertex(227, 281);
  vertex(218, 259);
  vertex(217, 231);
  endShape();

  fill('#2D262B');
  beginShape();
  vertex(234, 208);
  vertex(268, 210);
  vertex(269, 248);
  vertex(231, 248);
  vertex(230, 228);
  vertex(234, 208);
  endShape();

  fill('#2D262B');
  beginShape();
  vertex(254, 200);
  vertex(277, 202);
  vertex(276, 220);
  vertex(274, 229);
  vertex(250, 229);
  vertex(250, 210);
  vertex(254, 200);
  endShape();

  //Top Box Middle Short Stack Ends

  //Top Vase Shape Begins

  fill('#181F24');
  beginShape();
  vertex(127, 325);
  bezierVertex(136, 345, 150, 341, 149, 363);
  bezierVertex(143, 403, 87, 396, 89, 360);
  bezierVertex(89, 337, 105, 345, 112, 325);
  bezierVertex(112, 325, 127, 325,127, 325);
  endShape();

  fill('#22252C');
  beginShape();
  vertex(114,  283);
  bezierVertex(123, 303, 138, 299,137, 321);
  bezierVertex(131, 362, 72, 355, 74, 319);
  bezierVertex(75, 295, 91, 304, 98, 284);
  bezierVertex(98, 284, 114, 283, 114, 283);
  endShape();

  fill('#151E2D');
  beginShape();
  vertex(103, 253);
  bezierVertex(106, 263, 123, 262,126, 292);
  bezierVertex(129, 310, 78, 350, 56, 300);
  bezierVertex(53, 271, 77, 265, 84, 252);
  bezierVertex(84, 252, 103, 253, 103, 253);
  endShape();

  fill('#2C2B2D');
  beginShape();
  vertex(105, 229);
  bezierVertex(115, 248, 130, 245, 129, 266);
  bezierVertex(122, 305, 62, 298, 64, 264);
  bezierVertex(65, 241, 81, 249, 89, 229);
  bezierVertex(89, 229, 105, 229, 105, 229);
  endShape();

  fill('#544345');
  beginShape();
  vertex(82, 176);
  bezierVertex(100, 191, 131, 199, 133, 216);
  bezierVertex(132, 267, 47, 278, 32, 222);
  bezierVertex(29, 190, 60, 190, 67, 177);
  bezierVertex(67, 177, 82, 176, 82, 176);
  endShape();

  fill('#F35B40');
  beginShape();
  vertex(94, 142);
  bezierVertex(106, 164, 125, 160, 124, 185);
  bezierVertex(116, 231, 39, 223, 43, 182);
  bezierVertex(43, 155, 64, 165, 73, 142);
  bezierVertex(73, 142, 94, 142, 94, 142);
  endShape();

  fill('#AC7F70');
  beginShape();
  vertex(86, 94);
  bezierVertex(106, 105, 141, 94, 143, 129);
  bezierVertex(144, 190, 42, 195, 28, 136);
  bezierVertex(25, 104, 63, 108, 70, 94);
  bezierVertex(70, 94, 86, 94, 86, 94);
  endShape();

  fill('#F87A57');
  beginShape();
  vertex(92, 74);
  bezierVertex(112, 85, 142, 74, 145, 108);
  bezierVertex(140, 166, 37, 162, 35, 116);
  bezierVertex(32, 83, 70, 88, 77, 74);
  bezierVertex(77, 74, 92, 74, 92, 74);
  endShape();

  fill('#ECDCDF');
  beginShape();
  vertex(83, 62);
  bezierVertex(90, 80, 120, 69, 127, 93);
  bezierVertex(134, 129, 32, 139, 30, 89);
  bezierVertex(32, 73, 59, 73, 66, 59);
  bezierVertex(66, 59, 83, 62, 83, 62);
  endShape();

  fill('#DEECF5');
  beginShape();
  vertex(109, 55);
  bezierVertex(112, 76, 139, 69, 138, 87);
  bezierVertex(131, 123, 57, 111, 59, 85);
  bezierVertex(60, 65, 88, 77, 89, 55);
  bezierVertex(89, 55, 109, 55, 109, 55);
  endShape();

  //Top Vase Shape Ends

  //Bottom Right Quad Stack Starts

  fill('#6E4549');
  quad(406, 384, 445, 412, 401, 467, 371, 413);

  fill('#6E4549');
  quad(392, 336, 433, 366, 405, 414, 361, 370);

  fill('#21282E');
  quad(393, 292, 431, 341, 400, 373, 354, 319);

  fill('#6E4549');
  quad(399, 258, 435, 307, 390, 331, 359, 280);

  fill('#6E4549');
  quad(410, 241, 433, 276, 402, 297, 382, 266);

  //Bottom Right Quad Stack Ends


  //Bottom Circles Start

  fill('#1A2127');
  beginShape();
  vertex(184, 440);
  bezierVertex(184, 440, 214, 442, 217, 475);
  bezierVertex(217, 475, 225, 506, 190, 518);
  bezierVertex(190, 518, 150, 525, 146, 481);
  bezierVertex(146, 481, 143, 446, 184, 440);
  endShape();

  fill('#292A31');
  beginShape();
  vertex(174, 420);
  bezierVertex(174, 420, 201, 422, 204, 447);
  bezierVertex(204, 447, 211, 471, 179, 480);
  bezierVertex(179, 480, 143, 485, 140, 452);
  bezierVertex(140, 452, 137, 425, 174, 420);
  endShape();

  fill('#2A2A32');
  beginShape();
  vertex(182, 385);
  bezierVertex(182, 385, 215, 386, 218, 412);
  bezierVertex(218, 412, 221, 430, 190, 444);
  bezierVertex(190, 444, 147, 451, 142, 417);
  bezierVertex(142, 417, 139, 390, 182, 385);
  endShape();

  fill('#182438');
  beginShape();
  vertex(170, 356);
  bezierVertex(170, 356, 196, 357, 199, 384);
  bezierVertex(199, 384, 205, 409, 175, 418);
  bezierVertex(175, 418, 141, 424, 138, 389);
  bezierVertex(138, 389, 135, 361, 170, 356);
  endShape();

  fill('#3A3338');
  beginShape();
  vertex(181, 338);
  bezierVertex(181, 338, 201, 340, 203, 360);
  bezierVertex(203, 360, 208, 379, 185, 386);
  bezierVertex(185, 386, 159, 390, 157, 364);
  bezierVertex(157, 364, 155, 342, 181, 338);
  endShape();

  fill('#7A5660');
  beginShape();
  vertex(173, 293);
  bezierVertex(173, 293, 202, 294, 205, 320);
  bezierVertex(205, 320, 212, 344, 179, 353);
  bezierVertex(179, 353, 142, 356, 139, 324);
  bezierVertex(139, 324, 136, 299, 173, 293);
  endShape();

  fill('#F64C37');
  beginShape();
  vertex(172, 264);
  bezierVertex(172, 264, 194, 265, 196, 289);
  bezierVertex(196, 289, 201, 312, 177, 320);
  bezierVertex(177, 320, 149, 325, 146, 294);
  bezierVertex(146, 294, 144, 269, 172, 264);
  endShape();

  fill('#EEC3BC');
  beginShape();
  vertex(176, 253);
  bezierVertex(176, 253, 192, 254, 194, 270);
  bezierVertex(194, 270, 198, 286, 179, 292);
  bezierVertex(179, 292, 159, 295, 157, 273);
  bezierVertex(157, 273, 155, 256, 176, 253);
  endShape();

  //Bottom Circle Shape Ends


  //Bottom Left Horizontal Leaf Starts

  fill('#181B24');
  beginShape();
  vertex(-10, 556);
  bezierVertex(4, 546, 19, 510, 37, 509);
  bezierVertex(54, 508, 75, 542, 90, 547);
  bezierVertex(66, 560, 70, 586, 36, 590);
  bezierVertex(19, 589, 11, 572, -10, 556);
  endShape();

  fill('#282B30');
  beginShape();
  vertex(0, 524);
  bezierVertex(7, 508, 20, 472, 38, 471);
  bezierVertex(55, 471, 70, 502, 85, 507);
  bezierVertex(61, 520, 70, 553, 36, 557);
  bezierVertex(19, 557, 22, 540, 0, 524);
  endShape();

  fill('#272A2F');
  beginShape();
  vertex(0, 486);
  bezierVertex(15, 472, 22, 465, 41, 465);
  bezierVertex(57, 464, 66, 471, 82, 476);
  bezierVertex(57, 489, 62, 513, 36, 521);
  bezierVertex(20, 524, 10, 501, 0, 486);
  endShape();

  fill('#1A283F');
  beginShape();
  vertex(1, 453);
  bezierVertex(22, 442, 21, 430, 39, 430);
  bezierVertex(56, 429, 72, 446, 88, 451);
  bezierVertex(57, 453, 64, 483, 35, 488);
  bezierVertex(13, 485, 12, 460, 1, 453);
  endShape();

  fill('#373D3D');
  beginShape();
  vertex(0, 421);
  bezierVertex(10, 415, 16, 395, 41, 395);
  bezierVertex(66, 394, 68, 410, 91, 417);
  bezierVertex(70, 424, 72, 448, 36, 451);
  bezierVertex(13, 452, 8, 428, 0, 421);
  endShape();

  fill('#5A484A');
  beginShape();
  vertex(0,383,);
  bezierVertex(22, 372, 15, 350, 46, 348);
  bezierVertex(78, 349, 74, 380, 96, 386);
  bezierVertex(76, 385, 77, 415, 40, 421);
  bezierVertex(13, 419, 19, 396, 0, 383);
  endShape();

  fill('#E94D3A');
  beginShape();
  vertex(0, 359);
  bezierVertex(10, 358, 22, 337,43, 339);
  bezierVertex(64, 339, 74, 354, 93, 358);
  bezierVertex(64, 364, 73, 374, 43, 378);
  bezierVertex(21, 377, 21, 369, 0, 359);
  endShape();

  fill('#E4B4B6');
  beginShape();
  vertex(8, 338);
  bezierVertex(31, 333, 30, 326, 54, 326);
  bezierVertex(73, 327, 71, 334, 82, 336);
  bezierVertex(70, 340, 61, 352, 47, 353);
  bezierVertex(24, 354, 21, 342, 8, 338);
  endShape();
  //Bottom Left Horizontal Leaf Ends


  //Bottom vertical Leaf Starts

  fill('#242A34');
  beginShape();
  vertex(281, 521);
  bezierVertex(297, 557, 314, 534, 329, 566);
  bezierVertex(329, 593, 307, 596, 304, 621);
  bezierVertex(286, 597, 270, 601, 259, 576);
  bezierVertex(254, 551, 281, 552, 281, 521);
  endShape();

  fill('#252732');
  beginShape();
  vertex(272, 476);
  bezierVertex(286, 515, 302, 493, 317, 527);
  bezierVertex(317, 556, 297, 557, 293, 583);
  bezierVertex(276, 556, 261, 558, 252, 532);
  bezierVertex(246, 505, 271, 508, 272, 476);
  endShape();

  fill('#263045');
  beginShape();
  vertex(294, 445);
  bezierVertex(296, 481, 322, 466, 326, 498);
  bezierVertex(315, 521, 291, 518, 278, 538);
  bezierVertex(269, 512, 251, 510, 250, 486);
  bezierVertex(254, 463, 281, 471, 294, 445);
  endShape();

  fill('#38343C');
  beginShape();
  vertex(304, 385);
  bezierVertex(315, 424, 336, 422, 337, 448);
  bezierVertex(331, 483, 299, 474, 285, 502);
  bezierVertex(279, 471,262, 483, 261, 438);
  bezierVertex(268, 402, 297, 414, 304, 385);
  endShape();

  fill('#5C4A4F');
  beginShape();
  vertex(353, 329);
  bezierVertex(348, 361, 381, 374, 359, 399);
  bezierVertex(334, 432, 318, 412, 287, 458);
  bezierVertex(279, 394, 248, 437, 261, 366);
  bezierVertex(280, 321, 309, 359, 353, 329);
  endShape();

  fill('#ED533D');
  beginShape();
  vertex(313, 302);
  bezierVertex(316, 340, 337, 338, 329, 367);
  bezierVertex(322, 394, 297, 397, 291, 421);
  bezierVertex(274, 381, 249, 400, 254, 354);
  bezierVertex(275, 312, 296, 329, 313, 302);
  endShape();

  fill('#DEA599');
  beginShape();
  vertex(284, 300);
  bezierVertex(294, 325, 304, 323, 305, 346);
  bezierVertex(301, 365, 289, 366, 278, 382);
  bezierVertex(270, 363, 255, 362, 256, 342);
  bezierVertex(262, 316, 275, 322, 284, 300);
  endShape();

  //Bottom Vertical Leaf Ends

  //Bottom Right Horizontal Leaf Starts

  fill('#242A34');
  beginShape();
  vertex(341, 569);
  bezierVertex(352, 567, 369, 547, 391, 547);
  bezierVertex(411, 550, 421, 568, 435, 574);
  bezierVertex(420, 594, 411, 606, 391, 607);
  bezierVertex(367, 606, 357, 580, 341, 569);
  endShape();

  fill('#2E3037');
  beginShape();
  vertex(345, 541);
  bezierVertex(356, 539, 369, 516, 391, 519);
  bezierVertex(410, 518, 421, 540, 435, 546);
  bezierVertex(417, 552, 409, 585, 389, 586);
  bezierVertex(365, 585, 361, 552, 345, 541);
  endShape();

  fill('#242D3F');
  beginShape();
  vertex(347, 509);
  bezierVertex(363, 507, 379, 488, 396, 491);
  bezierVertex(413, 493, 423, 504, 437, 513);
  bezierVertex(420, 530, 404, 543, 392, 542);
  bezierVertex(366, 546, 361, 517, 347, 509);
  endShape();

  fill('#3C3B41');
  beginShape();
  vertex(357, 481);
  bezierVertex(377, 477, 381, 460, 398, 463);
  bezierVertex(415, 465, 419, 485, 439, 485);
  bezierVertex(419, 499, 406, 515, 394, 515);
  bezierVertex(369, 518, 366, 489, 357, 481);
  endShape();

  //Bottom Right Horizontal Leaf Ends


  //Bottom Left Small Quad Stack Starts

  fill('#6C4847');
  quad(109, 533, 181, 567, 128, 607, 50, 585);
  fill('#6C4847');
  quad(120, 507, 159, 542, 122, 594, 62, 562);
  fill('#6C4847');
  quad(107, 456, 153, 506, 127, 559, 71, 514);
  fill('#6C4847');
  quad(114, 431, 143, 473, 110, 516, 82, 476);


  //Bottom Left Small Quad Stack Starts

  //Bottom Mid Small Quad Stack Starts

  fill('#3D3946');
  quad(190, 568, 254, 605, 208, 643, 139, 601);
  fill('#3D3946');
  quad(212, 548, 255, 582, 214, 604, 169, 577);
  fill('#3D3946');
  quad(221, 516, 246, 550, 215, 579, 186, 550);

  //Bottom Mid Small Quad Stack Starts

}
