/* Calendar */

var monthNames = {
  0: "Enero",
  1: "Febrero",
  2: "Marzo",
  3: "Abril",
  4: "Mayo",
  5: "Junio",
  6: "Julio",
  7: "Agosto",
  8: "Septiembre",
  9: "Octubre",
  10: "Noviembre",
  11: "Diciembre"
};

function Cal() {
  this.date = {};
  this.markup = {};
  this.date.today = new Date();
  this.date.today = new Date(
    this.date.today.getUTCFullYear(),
    this.date.today.getUTCMonth(),
    this.date.today.getUTCDate()
  );
  this.date.browse = new Date();
  this.markup.row = "row";
  this.markup.cell = "cell";
  this.markup.inactive = "g";
  this.markup.currentMonth = "mn";
  this.markup.slctd = "slctd";
  this.markup.today = "today";
  this.markup.dayArea = "dayArea";
  this.elementTag = "calendar";
  this.targetInput = "#hbdsdf";
  this.init = false;
  this.buildDOM();
  this.selectDate(
    this.date.today.getFullYear(),
    this.date.today.getMonth(),
    this.date.today.getDate()
  );
  this.constructDayArea();
  this.updateInput("Fecha de facturación", "", "");

  t = this;
  $(document).ready(function() {
    $(".outsideCal").click(function(ms) {
      e = $("." + t.elementTag + " .view");
      eco = e.offset();
      if (
        ms.pageX < eco.left ||
        ms.pageX > eco.left + e.width() ||
        ms.pageY < eco.top ||
        ms.pageY > eco.top + e.height()
      ) {
        if (!t.init) t.hide(300);
      }
    });
    $("." + t.elementTag).on("click", ".next-month", function() {
      t.setMonthNext();
    });
    $("." + t.elementTag).on("click", ".prev-month", function() {
      t.setMonthPrev();
    });
    $("." + t.elementTag).on("click", ".next-year", function() {
      t.setYearNext();
    });
    $("." + t.elementTag).on("click", ".prev-year", function() {
      t.setYearPrev();
    });

    $("." + t.elementTag).on("click", ".jump-to-next-month", function() {
      t.setMonthNext();
    });
    $("." + t.elementTag).on("click", ".jump-to-previous-month", function() {
      t.setMonthPrev();
    });

    $("." + t.elementTag).on("click", "." + t.markup.currentMonth, function() {
      d = t.selectDate(
        t.date.browse.getUTCFullYear(),
        t.date.browse.getUTCMonth(),
        $(this).html()
      );
      t.hide(300);
    });

    $("." + t.elementTag).on("click", ".title", function() {
      t.date.browse = new Date(t.date.today.getTime());
      t.constructDayArea(false);
    });

    $(t.targetInput).focus(function() {
      t.show(100);
      $(this).blur();
    });
  });
}
Cal.prototype.wd = function(wd) {
  if (wd == 0) return 7;
  return wd;
};
Cal.prototype.buildDOM = function() {
  html =
    "<div class='clear " +
    this.elementTag +
    "'>\n<div class='view'>\n<div class='head'>\n<div class='title'><span class='m'></span> <span class='y'></span></div>\n</div>\n";
  html +=
    "<div class='row th'>\n<div class='C'>M</div>\n<div class='C'>T</div>\n<div class='C'>W</div>\n<div class='C'>T</div>\n<div class='C'>F</div>\n<div class='C'>S</div>\n<div class='C'>S</div>\n</div>\n<div class='" +
    this.markup.dayArea +
    "'>\n";
  html +=
    "</div>\n\n<div class='row nav'>\n\n<i class='btn prev prev-year fa fa-fast-backward'></i>\n<i class='btn prev prev-month fa fa-play fa-flip-horizontal'></i>\n<i class='btn next next-month fa fa-play'></i>\n<i class='btn next next-year fa fa-fast-forward'></i>\n</div>\n</div>\n</div>\n";
  $(html).insertAfter(this.targetInput);
  $(this.targetInput).css("cursor", "pointer");
  this.hide(0);
};
Cal.prototype.constructDayArea = function(flipDirection) {
  newViewContent = "";
  wd = this.wd(this.date.browse.getUTCDay());
  d = this.date.browse.getUTCDate();
  m = this.date.browse.getUTCMonth();
  y = this.date.browse.getUTCFullYear();

  monthBgnDate = new Date(y, m, 1);
  monthBgn = monthBgnDate.getTime();
  monthEndDate = new Date(this.getMonthNext().getTime() - 1000 * 60 * 60 * 24);
  monthEnd = monthEndDate.getTime();

  monthBgnWd = this.wd(monthBgnDate.getUTCDay());
  itrBgn = monthBgnDate.getTime() - (monthBgnWd - 1) * 1000 * 60 * 60 * 24;
  /*itrEnd = monthEnd;
  i = 0;
  while(this.wd(new Date(itrEnd).getUTCDay())!=7) {
      itrEnd += 1000*60*60*24;
      i = i+1;
      if(i>10) break;
  }*/

  i = 1;
  n = 0;
  dayItr = itrBgn;
  newViewContent += "<div class='" + this.markup.row + "'>\n";
  while (n < 42) {
    cls = new Array("C", this.markup.cell);
    if (dayItr <= monthBgn)
      cls.push(this.markup.inactive, "jump-to-previous-month");
    else if (dayItr >= monthEnd + 1000 * 60 * 60 * 36)
      cls.push(this.markup.inactive, "jump-to-next-month");
    else cls.push(this.markup.currentMonth);
    if (dayItr == this.date.slctd.getTime() + 1000 * 60 * 60 * 24)
      cls.push(this.markup.slctd);
    if (dayItr == this.date.today.getTime() + 1000 * 60 * 60 * 24)
      cls.push(this.markup.today);

    date = new Date(dayItr);
    newViewContent +=
      "<div class='" + cls.join(" ") + "'>" + date.getUTCDate() + "</div>\n";
    i += 1;
    if (i > 7) {
      i = 1;
      newViewContent += "</div>\n<div class='" + this.markup.row + "'>\n";
    }
    n += 1;
    dayItr = dayItr + 1000 * 60 * 60 * 24;
  }
  newViewContent += "</div>\n";

  this.changePage(newViewContent, flipDirection);
  $("." + this.elementTag + " .title .m").html(monthNames[m]);
  $("." + this.elementTag + " .title .y").html(y);
  return newViewContent;
};
Cal.prototype.changePage = function(newPageContent, flipDirection) {
  multiplier = -1;
  mark = "-";
  if (flipDirection) {
    multiplier = 1;
    mark = "+";
  }

  oldPage = $("." + this.elementTag + " ." + this.markup.dayArea + " .mArea");
  newPage = $("<div class='mArea'></div>")
    .css("left", -1 * multiplier * 224 + "px")
    .html(newPageContent);
  $("." + this.elementTag + " ." + this.markup.dayArea).append(newPage);

  $(".mArea")
    .stop(1, 1)
    .animate(
      {
        left: mark + "=224px"
      },
      300,
      function() {
        oldPage.remove();
      }
    );
};
Cal.prototype.selectDate = function(y, m, d) {
  this.date.slctd = new Date(y, m, d);
  this.updateInput(y, m, d);
  this.constructDayArea(false);
  return this.date.slctd;
};
Cal.prototype.updateInput = function(y, m, d) {
  if (m == "") m = "";
  else m = monthNames[m];
  $(this.targetInput).val(y + " " + m + " " + d);
};
Cal.prototype.getMonthNext = function() {
  m = this.date.browse.getUTCMonth();
  y = this.date.browse.getUTCFullYear();
  if (m + 1 > 11) return new Date(y + 1, 0);
  else return new Date(y, m + 1);
};
Cal.prototype.getMonthPrev = function() {
  m = this.date.browse.getUTCMonth();
  y = this.date.browse.getUTCFullYear();
  if (m - 1 < 0) return new Date(y - 1, 11);
  else return new Date(y, m - 1);
};
Cal.prototype.setMonthNext = function() {
  m = this.date.browse.getUTCMonth();
  y = this.date.browse.getUTCFullYear();
  if (m + 1 > 11) {
    this.date.browse.setUTCFullYear(y + 1);
    this.date.browse.setUTCMonth(0);
  } else {
    this.date.browse.setUTCMonth(m + 1);
  }
  this.constructDayArea(false);
};
Cal.prototype.setMonthPrev = function() {
  m = this.date.browse.getUTCMonth();
  y = this.date.browse.getUTCFullYear();
  if (m - 1 < 0) {
    this.date.browse.setUTCFullYear(y - 1);
    this.date.browse.setUTCMonth(11);
  } else {
    this.date.browse.setUTCMonth(m - 1);
  }
  this.constructDayArea(true);
};
Cal.prototype.setYearNext = function() {
  y = this.date.browse.getUTCFullYear();
  this.date.browse.setUTCFullYear(y + 1);
  this.constructDayArea(false);
};
Cal.prototype.setYearPrev = function() {
  y = this.date.browse.getUTCFullYear();
  this.date.browse.setUTCFullYear(y - 1);
  this.constructDayArea(true);
};
Cal.prototype.hide = function(duration) {
  $("." + this.elementTag + " .view").slideUp(duration);
};
Cal.prototype.show = function(duration) {
  t = this;
  t.init = true;
  $("." + this.elementTag + " .view").slideDown(duration, function() {
    t.init = false;
  });
};

var c = new Cal();

/* Modal */

function openNav2() {
  $("#notificacion-envioCorreo").addClass("sideNav_open");
}

function closeNav2() {
  $("#notificacion-envioCorreo").removeClass("sideNav_open");
}

/* Modal */

function openNav() {
  $("#modal-lateral").addClass("sideNav_open");
}

function closeNav() {
  $("#modal-lateral").removeClass("sideNav_open");
}

var pageURL = $(location).attr("href");
if (pageURL == "http://localhost:3000/404.html") {
  setTimeout(function() {
    window.location = "2-b.html";
  }, 4000);
}

var pageURL = $(location).attr("href");
if (pageURL == "http://localhost:3000/2-b.html") {
  setTimeout(function() {
    openNav();
  }, 2000);
}

var pageURL = $(location).attr("href");
if (pageURL == "http://localhost:3000/1-d.html") {
  setTimeout(function() {
    window.location = "exito.html";
  }, 6000);
}

/* Vehiculo nuevo - usado show - hide */

var show1 = function() {
  document.getElementById("nuevo").style.display = "block";
  document.getElementById("usado").style.display = "none";
};
var show2 = function() {
  document.getElementById("usado").style.display = "block";
  document.getElementById("nuevo").style.display = "none";
};

/* Tipos de pago - usado show - hide */

var changePAC = function() {
  document.getElementById("rightPAC_3rd").innerHTML = "Pago automático PAT/PAC";
  document.getElementById("rightPAC_2nd").innerHTML = "Pago automático PAT/PAC";
  document.getElementById("rightPAC_1st").innerHTML = "Pago automático PAT/PAC";
};

var changeAvisovencimiento = function() {
  document.getElementById("rightPAC_3rd").innerHTML = "Aviso de vencimiento";
  document.getElementById("rightPAC_2nd").innerHTML = "Aviso de vencimiento";
  document.getElementById("rightPAC_1st").innerHTML = "Aviso de vencimiento";
};

/* Tipos de pago - Pat - Pac - PC */

var show3 = function() {
  document.getElementById("pat").style.display = "block";
  document.getElementById("pac").style.display = "none";
  document.getElementById("pc").style.display = "none";
  $("#quotaDynamicText").text("Monto de la 1era cuota");
  $("#dynamicText").text(39343);
  $("#rightDynamicText").text(39343);
};
var show4 = function() {
  document.getElementById("pac").style.display = "block";
  document.getElementById("pat").style.display = "none";
  document.getElementById("pc").style.display = "none";
  $("#quotaDynamicText").text("Monto de la 1era cuota");
  $("#dynamicText").text(39343);
  $("#rightDynamicText").text(39343);
};

var show5 = function() {
  document.getElementById("pc").style.display = "block";
  document.getElementById("pat").style.display = "none";
  document.getElementById("pac").style.display = "none";
  $("#quotaDynamicText").text("Con un descuento del 25%");
  $("#dynamicText").text(22 * 1120);
  $("#rightDynamicText").text(22 * 1120);
};

$("#SOAPCheckbox").click(function() {
  if ($(this).is(":checked")) {
    $("#dynamicValueText").text(parseInt($("#rightDynamicText").text()) + 9000);
  } else {
    $("#dynamicValueText").text(parseInt($("#rightDynamicText").text()));
  }
});

/* Tipo de Inspeccion Centro - domicilio - auto */

var show6 = function() {
  document.getElementById("centro-compania").style.display = "block";
  document.getElementById("inspeccion-domicilio").style.display = "none";
  document.getElementById("autoInspeccion").style.display = "none";
  document.getElementById("inspeccion-domicilio__edicion").style.display =
    "none";
};
var show7 = function() {
  document.getElementById("inspeccion-domicilio").style.display = "block";
  document.getElementById("centro-compania").style.display = "none";
  document.getElementById("autoInspeccion").style.display = "none";
  document.getElementById("inspeccion-domicilio__edicion").style.display =
    "none";
};

var show8 = function() {
  document.getElementById("autoInspeccion").style.display = "block";
  document.getElementById("centro-compania").style.display = "none";
  document.getElementById("inspeccion-domicilio").style.display = "none";
  document.getElementById("inspeccion-domicilio__edicion").style.display =
    "none";
};

var ediDireccion = function() {
  document.getElementById("inspeccion-domicilio__edicion").style.display =
    "block";
  document.getElementById("inspeccion-domicilio").style.display = "none";
};

/* Patente show - hide */

$("#seleccionar").click(function() {
  $(".datos-vehiculo").slideUp(function(cb) {
    $("#container-datos-vehiculo")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".datos-contratante").slideDown(function(cb) {
      $("#container-datos-contratante")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
    });
  });
});

/* Close and change card-shadow show - hide  / Patente */

$("#continuar").click(function() {
  $(".datos-vehiculo").slideUp(function(cb) {
    $("#container-datos-vehiculo")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completado").toggle();
    $(".datos-contratante").slideDown(function(cb) {
      $("#container-datos-contratante")
        .removeClass("card-closed__shadow ")
        .addClass("card-open__shadow");

      $("#titleDatosContratante")
        .removeClass("card_title__close")
        .addClass("card_title__open");
    });
  });
});
$("#editar_patente").click(function() {
  $(".datos-vehiculo").slideDown(function(cb) {
    $("#datos-vehiculo__patente")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
    $(".datos-contratante").slideUp(function(cb) {
      $("#container-datos-contratante")
        .removeClass("card-open__shadow")
        .addClass("card-closed__shadow");
    });
  });
});
$("#editarcontratante_patente").click(function() {
  $(".datos-contratante").slideDown(function(cb) {
    $("#container-datos-contratante")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
    $(".datos-vehiculo").slideUp(function(cb) {
      $("#datos-vehiculo__patente")
        .removeClass("card-open__shadow")
        .addClass("card-closed__shadow");
    });
  });
});

/* Close and change card-shadow show - hide  / Sin Patente */

$("#continuar").click(function() {
  $(".datos-vehiculo__sinpatente").slideUp(function(cb) {
    $("#container-datos-vehiculo__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completado6").toggle();
    $(".datos-contratante__sinpatente").slideDown(function(cb) {
      $("#container-datos-contratante__sinpatente")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
      $("#titleDatosContratante2")
        .removeClass("card_title__close")
        .addClass("card_title__open");
    });
  });
});
$("#editar_sinpatente").click(function() {
  $(".datos-vehiculo__sinpatente").slideDown(function(cb) {
    $("#datos-vehiculo__patente")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
    $(".datos-contratante__sinpatente").slideUp(function(cb) {
      $("#container-datos-contratante__sinpatente")
        .removeClass("card-open__shadow")
        .addClass("card-closed__shadow");
    });
  });
});
$("#editarcontratante_sinpatente").click(function() {
  $(".datos-contratante__sinpatente").slideDown(function(cb) {
    $("#container-datos-contratante__sinpatente")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
    $(".datos-vehiculo__sinpatente").slideUp(function(cb) {
      $("#datos-vehiculo__patente")
        .removeClass("card-open__shadow")
        .addClass("card-closed__shadow");
    });
  });
});

$("#cotizar").click(function() {
  $(".datos-contratante__sinpatente").slideUp(function(cb) {
    $("#container-datos-contratante__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completado7").toggle();
  });
});

function DelayRedirect1() {
  var seconds = 3;
  var dvCountDown = document.getElementById("dvCountDown");
  var lblCount = document.getElementById("lblCount");
  setInterval(function() {
    seconds--;
    if (seconds == 0) {
      window.location = "404.html";
    }
  }, 3000);
}

$("#patenteOptioncontent").hide();
$("#patenteOption").click(function() {
  if ($(this).is(":checked")) {
    $("#patenteOptioncontent").show();
  } else {
    $("#patenteOptioncontent").hide();
  }
});

/* Switch active - ver tarifas  */

$("#table-prices").hide();
$(".ver-tarifas").click(function() {
  if ($(this).is(":checked")) {
    $("#table-prices").show();
  } else {
    $("#table-prices").hide();
  }
});

$("#table-prices__caminoinicial").hide();
$(".ver-tarifas").click(function() {
  if ($(this).is(":checked")) {
    $("#table-prices__caminoinicial").show();
  } else {
    $("#table-prices__caminoinicial").hide();
  }
});

/* Close and change card-shadow show - hide  / Planes */

$("#seleccionPlan_1").click(function() {
  $(".eligePlan").slideUp(function(cb) {
    openNav2();
    $(".completado8").toggle();
    $(".seguro-incluye_infomas").show();
    $("#container-elige-plan")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completar-datos__vehículo").slideDown(function(cb) {
      $("#completar-datos-vehiculo__planes")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
    });
  });
});

$("#seleccionPlan_2").click(function() {
  $(".eligePlan").slideUp(function(cb) {
    openNav2();
    $(".completado8").toggle();
    $(".seguro-incluye_infomas").show();
    $("#container-elige-plan")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completar-datos__vehículo").slideDown(function(cb) {
      $("#completar-datos-vehiculo__planes")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
    });
  });
});

$("#seleccionPlan_3").click(function() {
  $(".eligePlan").slideUp(function(cb) {
    openNav2();
    $(".completado8").toggle();
    $(".seguro-incluye_infomas").show();
    $("#container-elige-plan")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completar-datos__vehículo").slideDown(function(cb) {
      $("#completar-datos-vehiculo__planes")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
    });
  });
});

$("#editarplan__sinpatente").click(function() {
  $(".eligePlan").slideDown(function(cb) {
    $("#container-elige-plan")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
    $(".completar-datos__vehículo").slideUp(function(cb) {
      $("#completar-datos-vehiculo__planes")
        .removeClass("card-open__shadow")
        .addClass("card-closed__shadow");
    });
  });
});

/* Close and change card-shadow show - hide  / Planes sin patente */

$("#seleccionPlan1__sinpatente").click(function() {
  $(".eligePlan").slideUp(function(cb) {
    openNav2();
    $(".completado8").toggle();
    $(".seguro-incluye_infomas").show();
    $("#container-elige-plan__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completar-datos__vehículo__sinpatente").slideDown(function(cb) {
      $("#completar-datos-vehiculo__sinpatente")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
      $("#titleDatosContratante5")
        .removeClass("card_title__close")
        .addClass("card_title__open");
      if ($("#plan-sugerido2_sinpatente").hasClass("plan-sugerido-active__1"))
        $("#plan-sugerido2_sinpatente")
          .addClass("plan-sugerido__2")
          .removeClass("plan-sugerido-active__1");
      if ($("#plan-sugerido3_sinpatente").hasClass("plan-sugerido-active__1"))
        $("#plan-sugerido3_sinpatente")
          .addClass("plan-sugerido__3")
          .removeClass("plan-sugerido-active__1");

      $("#plan-sugerido1_sinpatente")
        .removeClass("plan-sugerido__1")
        .addClass("plan-sugerido-active__1");
    });
  });
});

$("#seleccionPlan2__sinpatente").click(function() {
  $(".eligePlan").slideUp(function(cb) {
    openNav2();
    $(".completado8").toggle();
    $(".seguro-incluye_infomas").show();
    $("#container-elige-plan__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completar-datos__vehículo__sinpatente").slideDown(function(cb) {
      $("#completar-datos-vehiculo__sinpatente")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
      $("#titleDatosContratante5")
        .removeClass("card_title__close")
        .addClass("card_title__open");
      if ($("#plan-sugerido1_sinpatente").hasClass("plan-sugerido-active__1"))
        $("#plan-sugerido1_sinpatente")
          .addClass("plan-sugerido__1")
          .removeClass("plan-sugerido-active__1");
      if ($("#plan-sugerido3_sinpatente").hasClass("plan-sugerido-active__1"))
        $("#plan-sugerido3_sinpatente")
          .addClass("plan-sugerido__3")
          .removeClass("plan-sugerido-active__1");
      $("#plan-sugerido2_sinpatente")
        .removeClass("plan-sugerido__3")
        .addClass("plan-sugerido-active__1");
    });
  });
});

$("#seleccionPlan3__sinpatente").click(function() {
  $(".eligePlan").slideUp(function(cb) {
    openNav2();
    $(".completado8").toggle();
    $(".seguro-incluye_infomas").show();
    $("#container-elige-plan__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completar-datos__vehículo__sinpatente").slideDown(function(cb) {
      $("#completar-datos-vehiculo__sinpatente")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
      $("#titleDatosContratante5")
        .removeClass("card_title__close")
        .addClass("card_title__open");
      if ($("#plan-sugerido1_sinpatente").hasClass("plan-sugerido-active__1"))
        $("#plan-sugerido1_sinpatente")
          .addClass("plan-sugerido__1")
          .removeClass("plan-sugerido-active__1");
      if ($("#plan-sugerido2_sinpatente").hasClass("plan-sugerido-active__1"))
        $("#plan-sugerido2_sinpatente")
          .addClass("plan-sugerido__2")
          .removeClass("plan-sugerido-active__1");
      $("#plan-sugerido3_sinpatente")
        .removeClass("plan-sugerido__2")
        .addClass("plan-sugerido-active__1");
    });
  });
});

$("#editar_plan__sinpatente").click(function() {
  $(".eligePlan").slideDown(function(cb) {
    $("#container-elige-plan")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
    $(".completar-datos__vehículo").slideUp(function(cb) {
      $("#completar-datos-vehiculo__planes")
        .removeClass("card-open__shadow")
        .addClass("card-closed__shadow");
    });
  });
});

/* Close and change card-shadow show - hide  / Datos del vehiculo */

$("#continuar_completar-datos-vehiculo").click(function() {
  $(".completar-datos__vehículo").slideUp(function(cb) {
    $("#completar-datos-vehiculo__planes")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completado2").toggle();
    $(".completar-datos-direccion__planes").slideDown(function(cb) {
      $("#completar-datos-direccion__planes")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
    });
  });
});

$("#editar-datos-vehiculos__planes").click(function() {
  $(".completar-datos__vehículo").slideDown(function(cb) {
    $("#completar-datos-vehiculo__planes")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
    $(".completar-datos-direccion__planes").slideUp(function(cb) {
      $("#completar-datos-direccion__planes")
        .removeClass("card-open__shadow")
        .addClass("card-closed__shadow");
    });
  });
});

/* Close and change card-shadow show - hide  / Datos del vehiculo sin patente */

$("#continuar_completar-datos-vehiculo__sinpatente").click(function() {
  $(".completar-datos__vehículo__sinpatente").slideUp(function(cb) {
    $("#completar-datos-vehiculo__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completado9").toggle();
    $(".completar-datos-personales__sinpatente").slideDown(function(cb) {
      $("#completar-datos-direccion__sinpatente")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
      $("#titleDatosContratante3")
        .removeClass("card_title__close")
        .addClass("card_title__open");
    });
  });
});

$("#editar-datos-vehiculos__sinpatente").click(function() {
  $(".completar-datos__vehículo__sinpatente").slideDown(function(cb) {
    $("#completar-datos-vehiculo__sinpatente")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
    $(".completar-datos-personales__sinpatente").slideUp(function(cb) {
      $("#completar-datos-direccion__sinpatente")
        .removeClass("card-open__shadow")
        .addClass("card-closed__shadow");
    });
  });
});

/* Close and change card-shadow show - hide  / Datos personales */

$("#continuar-datos-direccion__planes").click(function() {
  $(".completar-datos-direccion__planes").slideUp(function(cb) {
    $("#completar-datos-vehiculo__planes")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completado3").toggle();
    $(".seleccionar-inspeccion").slideDown(function(cb) {
      $("#seleccionar-inspeccion__planes")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
      $("#titleDatosContratante3")
        .removeClass("card_title__close")
        .addClass("card_title__open");
    });
  });
});

$("#editar_datos-direccion-planes").click(function() {
  $(".completar-datos-direccion__planes").slideDown(function(cb) {
    $("#completar-datos-direccion__planes")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
    $(".seleccionar-inspeccion").slideUp(function(cb) {
      $("#seleccionar-inspeccion__planes")
        .removeClass("card-open__shadow")
        .addClass("card-closed__shadow");
    });
  });
});

/* Close and change card-shadow show - hide  / Datos de personales sin patente*/

$("#continuar-datos-personales__sinpatente").click(function() {
  $(".completar-datos-personales__sinpatente").slideUp(function(cb) {
    $("#completar-datos-vehiculo__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completado10").toggle();
    $(".seleccionar-inspeccion__sinpatente").slideDown(function(cb) {
      $("#seleccionar-inspeccion__sinpatente")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
      $("#titleDatosContratante4")
        .removeClass("card_title__close")
        .addClass("card_title__open");
    });
  });
});

$("#editar_datos-direccion__sinpatente").click(function() {
  $(".completar-datos-personales__sinpatente").slideDown(function(cb) {
    $("#completar-datos-direccion__sinpatente")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
    $(".seleccionar-inspeccion__sinpatente").slideUp(function(cb) {
      $("#seleccionar-inspeccion__sinpatente")
        .removeClass("card-open__shadow")
        .addClass("card-closed__shadow");
      $("#titleDatosContratante3")
        .removeClass("card_title__close")
        .addClass("card_title__open");
    });
  });
});

/* Close and change card-shadow show - hide  / Inspeccion sin patente*/

$("#contratar").click(function() {
  $(".seleccionar-inspeccion__sinpatente").slideUp(function(cb) {
    $("#seleccionar-inspeccion__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completado11").toggle();
  });
});

function DelayRedirect3() {
  var seconds = 3;
  var dvCountDown = document.getElementById("dvCountDown");
  var lblCount = document.getElementById("lblCount");
  setInterval(function() {
    seconds--;
    if (seconds == 0) {
      window.location = "1-c.html";
    }
  }, 1000);
}

/* Agregar productos SOAP */

$("#aceptar").click(function() {
  $(".seleccion-pago").slideUp(function(cb) {
    $("#seleccion-pago")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completado4").toggle();
    $(".agregar-productos").slideDown(function(cb) {
      $("#agregarProductos")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
      $("#titleDatosContratante6")
        .removeClass("card_title__close")
        .addClass("card_title__open");
    });
  });
});

$("#aceptar2").click(function() {
  $(".seleccion-pago").slideUp(function(cb) {
    $("#seleccion-pago")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completado4").toggle();
    $(".agregar-productos").slideDown(function(cb) {
      $("#agregarProductos")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
      $("#titleDatosContratante6")
        .removeClass("card_title__close")
        .addClass("card_title__open");
    });
  });
});

$("#editar-agregar").click(function() {
  $(".agregar-productos").slideDown(function(cb) {
    $("#agregarProductos")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
    $(".seleccion-pago").slideUp(function(cb) {
      $("#seleccion-pago")
        .removeClass("card-open__shadow")
        .addClass("card-closed__shadow");
    });
  });
});

$("#editar-mediospago").click(function() {
  $(".seleccion-pago").slideDown(function(cb) {
    $("#seleccion-pago")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
    $(".agregar-productos").slideUp(function(cb) {
      $("#agregarProductos")
        .removeClass("card-open__shadow")
        .addClass("card-closed__shadow");
    });
  });
});
$("#pagar").click(function() {
  $(".agregar-productos").slideUp(function(cb) {
    $("#agregarProductos")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completado12").toggle();
  });
});

function DelayRedirect() {
  var seconds = 3;
  var dvCountDown = document.getElementById("dvCountDown");
  var lblCount = document.getElementById("lblCount");
  setInterval(function() {
    seconds--;
    if (seconds == 0) {
      window.location = "1-d.html";
    }
  }, 1000);
}

// function DelayRedirect4() {
//   var seconds = 6;
//   var dvCountDown = document.getElementById("dvCountDown");
//   var lblCount = document.getElementById("lblCount");
//   setInterval(function() {
//     seconds--;
//     if (seconds == 0) {
//       window.location = "exito.html";
//     }
//   }, 1000);
// }

// Seleccionar SOAP

$("#seleccionPlan_1").click(function() {
  $("#plan-sugerido1")
    .removeClass("plan-sugerido__1")
    .addClass("plan-sugerido-active__1");
});

$("#ver-vehiculo-nuevo__info").click(function() {
  $("#vehiculo-nuevo__info").toggle();
});

/* Footer Condiciones- detalle show - hide */

$("#ver-detalle").click(function() {
  if ($("#condiciones").hasClass("activeCondiciones")) {
    $("#condiciones").hide();
    $("#condiciones").removeClass("activeCondiciones");
    $("#condiciones").addClass("inactiveCondiciones");
    $(".footer-condiciones").height(50);
    // $("#info-condiciones").height(100);
  } else {
    $("#condiciones").show();
    $("#condiciones").removeClass("inactiveCondiciones");
    $("#condiciones").addClass("activeCondiciones");
    $(".footer-condiciones").height(220);
    // $("#info-condiciones").height(100);
  }
});

/* Validaciones Campos */

$(document).ready(function() {
  $("#numChasis").change(function() {
    if ($(this).val()) {
      $("#success-input-val__chasis").show();
      $("#error-input-val__chasis").hide();
    } else {
      $("#error-input-val__chasis").show();
      $("#success-input-val__chasis").hide();
    }
  });
  $("#correoInput").change(function() {
    if ($(this).val()) {
      $("#correoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#correoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-error");
    }
  });
  $("#correoduenoInput").change(function() {
    if ($(this).val()) {
      $("#correoduenoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#correoduenoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-error");
    }
  });
  $("#telefonoInput").change(function() {
    if ($(this).val()) {
      $("#telefonoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#telefonoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-error");
    }
  });
  $("#numChasis").change(function() {
    if ($(this).val()) {
      $("#numChasis")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#numChasis")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#calleInput").change(function() {
    if ($(this).val()) {
      $("#calleInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#calleInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#calleduenoInput").change(function() {
    if ($(this).val()) {
      $("#calleduenoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#calleduenoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#callecontratanteInput").change(function() {
    if ($(this).val()) {
      $("#callecontratanteInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#callecontratanteInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#numeroInput").change(function() {
    if ($(this).val()) {
      $("#numeroInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#numeroInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#numduenoInput").change(function() {
    if ($(this).val()) {
      $("#numduenoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#numduenoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#numcontratanteInput").change(function() {
    if ($(this).val()) {
      $("#numcontratanteInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#numcontratanteInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#departamentoInput").change(function() {
    if ($(this).val()) {
      $("#departamentoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#departamentoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#departamentoduenoInput").change(function() {
    if ($(this).val()) {
      $("#departamentoduenoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#departamentoduenoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#departamentocontratanteInput").change(function() {
    if ($(this).val()) {
      $("#departamentocontratanteInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#departamentocontratanteInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#numTarjetaPAT-input").change(function() {
    if ($(this).val()) {
      $("#numTarjetaPAT-input")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#numTarjetaPAT-input")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#fechaPATInput").change(function() {
    if ($(this).val()) {
      $("#fechaPATInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#fechaPATInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#numTarjetaPAC-input").change(function() {
    if ($(this).val()) {
      $("#numTarjetaPAC-input")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#numTarjetaPAC-input")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#fechaInputPAC").change(function() {
    if ($(this).val()) {
      $("#fechaInputPAC")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#fechaInputPAC")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#numCuenta-input").change(function() {
    if ($(this).val()) {
      $("#numCuenta-input")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#numCuenta-input")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#patenteInput").change(function() {
    if ($(this).val()) {
      $("#patenteInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#patenteInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#nombreInput").change(function() {
    if ($(this).val()) {
      $("#nombreInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#nombreInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#apepaternoInput").change(function() {
    if ($(this).val()) {
      $("#apepaternoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#apepaternoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#apematernoInput").change(function() {
    if ($(this).val()) {
      $("#apematernoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#apematernoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#apematernoduenoInput").change(function() {
    if ($(this).val()) {
      $("#apematernoduenoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#apematernoduenoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#rutInput").change(function() {
    if ($(this).val()) {
      $("#rutInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#rutInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#rutduenoInput").change(function() {
    if ($(this).val()) {
      $("#rutduenoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#rutduenoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });

  $("#nummotorInput").change(function() {
    if ($(this).val()) {
      $("#nummotorInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#nummotorInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#numFacturaInput").change(function() {
    if ($(this).val()) {
      $("#numFacturaInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#numFacturaInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#fechafacturaInput").change(function() {
    if ($(this).val()) {
      $("#fechafacturaInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#fechafacturaInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#nummotornuevoInput").change(function() {
    if ($(this).val()) {
      $("#nummotornuevoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#nummotornuevoInput")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });
  $("#numChasisnuevo").change(function() {
    if ($(this).val()) {
      $("#numChasisnuevo")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    } else {
      $("#numChasisnuevo")
        .removeClass("form-control:focus")
        .addClass("form-control-success");
    }
  });

  /* Slider */

  var deducibles = ["0", "3", "5", "10"];
  var responsabilidad_civil = ["0", "500", "1000", "3000"];
  var sliderEdades = ["18", "23", "28"];
  $("#priceRight").text("$" + 45 * 110020 + " ");
  $("#daysRight").text(" " + 45 + " ");
  $(".slider")
    .slider({
      min: 0,
      max: 45,
      value: 45,
      step: 15
    })
    .slider("pips", {
      rest: "label",
      // prefix: "$",
      suffix: "días"
    })
    .slider("float")
    .on("slidechange", function(e, ui) {
      $("#autoreemplazo").text("Usted ha seleccionado " + ui.value + " días");
      $("#daysRight").text(" " + ui.value + " ");
      $("#priceRight").text("$" + ui.value * 110020 + " ");
    });

  $(".slider2")
    .slider({
      min: 0,
      max: responsabilidad_civil.length - 1,
      value: 0
    })
    .slider("pips", {
      rest: "label",
      // prefix: "$",
      labels: responsabilidad_civil,
      suffix: "UF"
    })
    .slider("float", {
      labels: responsabilidad_civil
    })
    .on("slidechange", function(e, ui) {
      $("#responsabilidad-civil").text(
        "Usted ha seleccionado " + responsabilidad_civil[ui.value] + " UF"
      );
      $("#priceRight").text("$" + ui.value * 110020 + " ");
    });

  $(".slider3")
    .slider({
      min: 0,
      max: deducibles.length - 1,
      value: 0
    })
    .slider("pips", {
      rest: "label",
      // prefix: "$",
      labels: deducibles,
      suffix: "UF"
    })
    .slider("float", {
      labels: deducibles
    })
    .on("slidechange", function(e, ui) {
      $("#deduciblesUF").text(
        "Usted ha seleccionado " + deducibles[ui.value] + " UF"
      );
      $("#priceRight").text("$" + ui.value * 110020 + " ");
    });

  $(".slider-edad")
    .slider({
      min: 0,
      max: sliderEdades.length - 1,
      value: 0
    })
    .slider("pips", {
      rest: "label",
      // prefix: "$",
      labels: sliderEdades,
      suffix: "años"
    })
    .slider("float", {
      labels: sliderEdades
    })
    .on("slidechange", function(e, ui) {
      $("#edadConductor").text(
        "El conductor tiene más de " + sliderEdades[ui.value] + " años"
      );
    });

  /* Selet Form - input */

  var util = {
      f: {
        addStyle: function(elem, prop, val, vendors) {
          var i, ii, property, value;
          if (!util.f.isElem(elem)) {
            elem = document.getElementById(elem);
          }
          if (!util.f.isArray(prop)) {
            prop = [prop];
            val = [val];
          }
          for (i = 0; i < prop.length; i += 1) {
            var thisProp = String(prop[i]),
              thisVal = String(val[i]);
            if (typeof vendors !== "undefined") {
              if (!util.f.isArray(vendors)) {
                vendors.toLowerCase() == "all"
                  ? (vendors = ["webkit", "moz", "ms", "o"])
                  : (vendors = [vendors]);
              }
              for (ii = 0; ii < vendors.length; ii += 1) {
                elem.style[vendors[i] + thisProp] = thisVal;
              }
            }
            thisProp = thisProp.charAt(0).toLowerCase() + thisProp.slice(1);
            elem.style[thisProp] = thisVal;
          }
        },
        cssLoaded: function(event) {
          var child = util.f.getTrg(event);
          child.setAttribute("media", "all");
        },
        events: {
          cancel: function(event) {
            util.f.events.prevent(event);
            util.f.events.stop(event);
          },
          prevent: function(event) {
            event = event || window.event;
            event.preventDefault();
          },
          stop: function(event) {
            event = event || window.event;
            event.stopPropagation();
          }
        },
        getPath: function(cb, args) {
          GLOBAL.path = window.location.href
            .split("masterdemolition")[1]
            .replace("inc.com/admin/", "")
            .replace("inc.com/admin", "")
            .replace("#!/", "")
            .replace("#!", "")
            .replace("#/", "")
            .replace("#", "");
          if (GLOBAL.path.indexOf("?") >= 0) {
            GLOBAL.path = GLOBAL.path.split("?")[0];
          }
          if (typeof cb !== "undefined") {
            typeof args !== "undefined" ? cb(args) : cb();
          } else {
            return GLOBAL.path;
          }
        },
        getSize: function(elem, prop) {
          return parseInt(elem.getBoundingClientRect()[prop], 10);
        },
        getTrg: function(event) {
          event = event || window.event;
          if (event.srcElement) {
            return event.srcElement;
          } else {
            return event.target;
          }
        },
        isElem: function(elem) {
          return util.f.isNode(elem) && elem.nodeType == 1;
        },
        isArray: function(v) {
          return v.constructor === Array;
        },
        isNode: function(elem) {
          return typeof Node === "object"
            ? elem instanceof Node
            : elem &&
                typeof elem === "object" &&
                typeof elem.nodeType === "number" &&
                typeof elem.nodeName === "string" &&
                elem.nodeType !== 3;
        },
        isObj: function(v) {
          return typeof v == "object";
        },
        replaceAt: function(str, index, char) {
          return str.substr(0, index) + char + str.substr(index + char.length);
        }
      }
    },
    //////////////////////////////////////
    // ok that's all the utilities      //
    // onto the select box / form stuff //
    //////////////////////////////////////
    form = {
      f: {
        init: {
          register: function() {
            console.clear(); //
            var child,
              children = document.getElementsByClassName("field"),
              i;
            for (i = 0; i < children.length; i += 1) {
              child = children[i];
              util.f.addStyle(child, "Opacity", 1);
            }
            children = document.getElementsByClassName("psuedo_select");
            for (i = 0; i < children.length; i += 1) {
              child = children[i];
              child.addEventListener("click", form.f.select.toggle);
            }
          },
          unregister: function() {
            //just here as a formallity
            //call this to stop all ongoing timeouts are ready the page for some sort of json re-route
          }
        },
        select: {
          blur: function(field) {
            field.classList.remove("focused");
            var child,
              children = field.childNodes,
              i,
              ii,
              nested_child,
              nested_children;
            for (i = 0; i < children.length; i += 1) {
              child = children[i];
              if (util.f.isElem(child)) {
                if (child.classList.contains("deselect")) {
                  child.parentNode.removeChild(child);
                } else if (child.tagName == "SPAN") {
                  if (!field.dataset.value) {
                    util.f.addStyle(
                      child,
                      ["FontSize", "Top"],
                      ["16px", "32px"]
                    );
                  }
                } else if (child.classList.contains("psuedo_select")) {
                  nested_children = child.childNodes;
                  for (ii = 0; ii < nested_children.length; ii += 1) {
                    nested_child = nested_children[ii];
                    if (util.f.isElem(nested_child)) {
                      if (nested_child.tagName == "SPAN") {
                        if (!field.dataset.value) {
                          util.f.addStyle(
                            nested_child,
                            ["Opacity", "Transform"],
                            [0, "translateY(24px)"]
                          );
                        }
                      } else if (nested_child.tagName == "UL") {
                        util.f.addStyle(
                          nested_child,
                          ["Height", "Opacity"],
                          [0, 0]
                        );
                      }
                    }
                  }
                }
              }
            }
          },
          focus: function(field) {
            field.classList.add("focused");
            var bool = false,
              child,
              children = field.childNodes,
              i,
              ii,
              iii,
              nested_child,
              nested_children,
              nested_nested_child,
              nested_nested_children,
              size = 0;
            for (i = 0; i < children.length; i += 1) {
              child = children[i];
              util.f.isElem(child) && child.classList.contains("deselect")
                ? (bool = true)
                : null;
            }
            if (!bool) {
              child = document.createElement("div");
              child.className = "deselect";
              child.addEventListener("click", form.f.select.toggle);
              field.insertBefore(child, children[0]);
            }
            for (i = 0; i < children.length; i += 1) {
              child = children[i];
              if (
                util.f.isElem(child) &&
                child.classList.contains("psuedo_select")
              ) {
                nested_children = child.childNodes;
                for (ii = 0; ii < nested_children.length; ii += 1) {
                  nested_child = nested_children[ii];
                  if (
                    util.f.isElem(nested_child) &&
                    nested_child.tagName == "UL"
                  ) {
                    size = 0;
                    nested_nested_children = nested_child.childNodes;
                    for (
                      iii = 0;
                      iii < nested_nested_children.length;
                      iii += 1
                    ) {
                      nested_nested_child = nested_nested_children[iii];
                      if (
                        util.f.isElem(nested_nested_child) &&
                        nested_nested_child.tagName == "LI"
                      ) {
                        size += util.f.getSize(nested_nested_child, "height");
                        console.log("size: " + size);
                      }
                    }
                    util.f.addStyle(
                      nested_child,
                      ["Height", "Opacity"],
                      [size + "px", 1]
                    );
                  }
                }
              }
            }
          },
          selection: function(child, parent) {
            var children = parent.childNodes,
              i,
              ii,
              nested_child,
              nested_children,
              time = 0,
              value;
            if (util.f.isElem(child) && util.f.isElem(parent)) {
              parent.dataset.value = child.dataset.value;
              value = child.innerHTML;
            }
            for (i = 0; i < children.length; i += 1) {
              child = children[i];
              if (util.f.isElem(child)) {
                if (child.classList.contains("psuedo_select")) {
                  nested_children = child.childNodes;
                  for (ii = 0; ii < nested_children.length; ii += 1) {
                    nested_child = nested_children[ii];
                    if (
                      util.f.isElem(nested_child) &&
                      nested_child.classList.contains("selected")
                    ) {
                      if (nested_child.innerHTML) {
                        time = 1e2;
                        util.f.addStyle(
                          nested_child,
                          ["Opacity", "Transform"],
                          [0, "translateY(24px)"],
                          "all"
                        );
                      }
                      setTimeout(
                        function(c, v) {
                          c.innerHTML = v;
                          util.f.addStyle(
                            c,
                            ["Opacity", "Transform", "TransitionDuration"],
                            [1, "translateY(0px)", ".1s"],
                            "all"
                          );
                        },
                        time,
                        nested_child,
                        value
                      );
                    }
                  }
                } else if (child.tagName == "SPAN") {
                  util.f.addStyle(child, ["FontSize", "Top"], ["12px", "8px"]);
                }
              }
            }
          },
          toggle: function(event) {
            util.f.events.stop(event);
            var child = util.f.getTrg(event),
              children,
              i,
              parent;
            switch (true) {
              case child.classList.contains("psuedo_select"):
              case child.classList.contains("deselect"):
                parent = child.parentNode;
                break;
              case child.classList.contains("options"):
                parent = child.parentNode.parentNode;
                break;
              case child.classList.contains("option"):
                parent = child.parentNode.parentNode.parentNode;
                form.f.select.selection(child, parent);
                break;
            }
            parent.classList.contains("focused")
              ? form.f.select.blur(parent)
              : form.f.select.focus(parent);
          }
        }
      }
    };

  window.onload = form.f.init.register;

  // openNav();

  /* Carousel*/

  $(".carousel").carousel();

  setTimeout(function() {
    $("#loadingImg").addClass("loadingImg");
  }, 1000);

  $(function() {
    $("#datepicker").datepicker();
  });

  $("#modal-preguntasfrecuentes").load("preguntas-frecuentes.html");
  $("#modal-beneficiosseguro").load("beneficios-seguro.html");
  $("#modal-infodeducible").load("info-deducible.html");
  $("#modal-detalleplanes").load("detalle-planes.html");
  $("#modal-lateral").load("modal-lateral.html");
  $("#notificacion-envioCorreo").load("modal-enviocotizacion.html");

  $(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: "linear",
    fade: true,
    draggable: false,
    infinite: true,
    arrows: false
  });
});
