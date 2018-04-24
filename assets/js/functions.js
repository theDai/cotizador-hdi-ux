/* Modal - Notificacion de envio de cotizacion al correo */

function openNav2() {
  $("#notificacion-envioCorreo").addClass("sideNav_open");
}

function closeNav2() {
  $("#notificacion-envioCorreo").removeClass("sideNav_open");
}

/* Modal - Promocion */

function openNav() {
  $("#modal-lateral").addClass("sideNav_open");
}

function closeNav() {
  $("#modal-lateral").removeClass("sideNav_open");
}

var pageURL = $(location).attr("href");
if (pageURL == "http://localhost:3000/404-error.html") {
  setTimeout(function() {
    window.location = "2-b-inactivo.html";
  }, 4000);
}

var pageURL = $(location).attr("href");
if (pageURL == "http://localhost:3000/2-b.html") {
  setTimeout(function() {
    openNav();
  }, 2000);
}

var pageURL = $(location).attr("href");
if (pageURL == "http://localhost:3000/loading-mensaje.html") {
  setTimeout(function() {
    window.location = "exito.html";
  }, 3000);
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

/* Card-collapse / Prototipo / Sin Patente */

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
$("#continuar_datoscontratante").click(function() {
  $(".datos-contratante__sinpatente").slideUp(function(cb) {
    $("#container-datos-contratante__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completado7").toggle();
    $("#cotizar")
      .removeClass("button-primary__inactivo")
      .addClass("button-primary");
    // $(".completado7").toggle();
    // $(".datos-contratante__sinpatente").slideDown(function(cb) {
    //   $("#container-datos-contratante__sinpatente")
    //     .removeClass("card-closed__shadow")
    //     .addClass("card-open__shadow");
    //   $("#titleDatosContratante2")
    //     .removeClass("card_title__close")
    //     .addClass("card_title__open");
    // });
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
    // $(".completado7").toggle();
  });
});

function DelayRedirect1() {
  var seconds = 3;
  var dvCountDown = document.getElementById("dvCountDown");
  var lblCount = document.getElementById("lblCount");
  setInterval(function() {
    seconds--;
    if (seconds == 0) {
      window.location = "404-error.html";
    }
  }, 2000);
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
    // openNav2();
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
    // openNav2();
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
    // openNav2();
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

// $("#editarplan__sinpatente").click(function() {
//   $(".eligePlan").slideDown(function(cb) {
//     $("#container-elige-plan")
//       .removeClass("card-closed__shadow")
//       .addClass("card-open__shadow");
//     $(".completar-datos__vehículo").slideUp(function(cb) {
//       $("#completar-datos-vehiculo__planes")
//         .removeClass("card-open__shadow")
//         .addClass("card-closed__shadow");
//     });
//   });
// });

/* Close and change card-shadow show - hide  / Planes sin patente */

$("#seleccionPlan1__sinpatente").click(function() {
  $(".seguro-incluye_infomas").show();
  if ($("#plan-sugerido2_sinpatente").hasClass("plan-sugerido-active__1"))
    $("#plan-sugerido2_sinpatente")
      .addClass("plan-sugerido2__opacity")
      .removeClass("plan-sugerido-active__1");
  else {
    $("#plan-sugerido2_sinpatente").addClass("plan-sugerido2__opacity");

    if ($("#plan-sugerido3_sinpatente").hasClass("plan-sugerido-active__1"))
      $("#plan-sugerido3_sinpatente")
        .addClass("plan-sugerido3__opacity")
        .removeClass("plan-sugerido-active__1");
    else {
      $("#plan-sugerido3_sinpatente").addClass("plan-sugerido3__opacity");
    }
    $("#plan-sugerido1_sinpatente")
      .removeClass("plan-sugerido1__opacity")
      .addClass("plan-sugerido-active__1");
  }
});

$("#seleccionPlan2__sinpatente").click(function() {
  $(".seguro-incluye_infomas").show();
  if ($("#plan-sugerido1_sinpatente").hasClass("plan-sugerido-active__1"))
    $("#plan-sugerido1_sinpatente")
      .addClass("plan-sugerido1__opacity")
      .removeClass("plan-sugerido-active__1");
  else {
    $("#plan-sugerido1_sinpatente").addClass("plan-sugerido1__opacity");

    if ($("#plan-sugerido3_sinpatente").hasClass("plan-sugerido-active__1"))
      $("#plan-sugerido3_sinpatente")
        .addClass("plan-sugerido3__opacity")
        .removeClass("plan-sugerido-active__1");
    else {
      $("#plan-sugerido3_sinpatente").addClass("plan-sugerido3__opacity");
    }
    $("#plan-sugerido2_sinpatente")
      .removeClass("plan-sugerido2__opacity")
      .addClass("plan-sugerido-active__1");
  }
});

$("#seleccionPlan3__sinpatente").click(function() {
  $(".seguro-incluye_infomas").show();
  if ($("#plan-sugerido1_sinpatente").hasClass("plan-sugerido-active__1"))
    $("#plan-sugerido1_sinpatente")
      .addClass("plan-sugerido1__opacity")
      .removeClass("plan-sugerido-active__1");
  else {
    $("#plan-sugerido1_sinpatente").addClass("plan-sugerido1__opacity");

    if ($("#plan-sugerido2_sinpatente").hasClass("plan-sugerido-active__1"))
      $("#plan-sugerido2_sinpatente")
        .addClass("plan-sugerido2__opacity")
        .removeClass("plan-sugerido-active__1");
    else {
      $("#plan-sugerido2_sinpatente").addClass("plan-sugerido2__opacity");
    }
    $("#plan-sugerido3_sinpatente")
      .removeClass("plan-sugerido3__opacity")
      .addClass("plan-sugerido-active__1");
  }
});

$("#editar_plan__sinpatente").click(function() {
  $(".eligePlan").slideDown(function(cb) {
    $("#container-elige-plan")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
    // $(".completado8").toggle();
    $(".completar-datos__vehículo").slideUp(function(cb) {
      $("#completar-datos-vehiculo__planes")
        .removeClass("card-open__shadow")
        .addClass("card-closed__shadow");
    });
  });
});

/* Close and change card-shadow show - hide  / Datos del vehiculo */

$("#continuar_eligeplan").click(function() {
  $(".eligePlan").slideUp(function(cb) {
    $("#container-elige-plan__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $("#titleDatosContratante5")
      .removeClass("card_title__close")
      .addClass("card_title__open");
    $(".completado8").toggle();
    $(".completar-datos__vehículo__sinpatente").slideDown(function(cb) {
      $("#completar-datos-vehiculo__sinpatente")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
    });
  });
});

// $("#editar-datos-vehiculos__planes").click(function() {
//   $(".completar-datos__vehículo").slideDown(function(cb) {
//     $("#completar-datos-vehiculo__planes")
//       .removeClass("card-closed__shadow")
//       .addClass("card-open__shadow");
//     $(".completar-datos-direccion__planes").slideUp(function(cb) {
//       $("#completar-datos-direccion__planes")
//         .removeClass("card-open__shadow")
//         .addClass("card-closed__shadow");
//     });
//   });
// });

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

$("#continuar_inspeccion").click(function() {
  $(".seleccionar-inspeccion__sinpatente").slideUp(function(cb) {
    openNav2();
    $(".completado11").toggle();
    $("#contratar")
      .removeClass("button-primary__inactivo")
      .addClass("button-primary");
  });
});

$("#editar-inspeccion__planes").click(function() {
  $(".seleccionar-inspeccion__sinpatente").slideDown(function(cb) {
    $("#seleccionar-inspeccion__sinpatente")
      .removeClass("card-closed__shadow")
      .addClass("card-open__shadow");
  });
});

// $("#contratar").click(function() {
//   $(".seleccionar-inspeccion__sinpatente").slideUp(function(cb) {
//     openNav2();
//     $("#seleccionar-inspeccion__sinpatente")
//       .removeClass("card-open__shadow")
//       .addClass("card-closed__shadow");
//     $(".completado11").toggle();
//   });
// });

function DelayRedirect3() {
  var seconds = 3;
  var dvCountDown = document.getElementById("dvCountDown");
  var lblCount = document.getElementById("lblCount");
  setInterval(function() {
    seconds--;
    if (seconds == 0) {
      window.location = "loading-mensaje.html";
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
$("#continuar_agregarproductos").click(function() {
  $(".agregar-productos").slideUp(function(cb) {
    $(".completado12").toggle();
    $("#pagar")
      .removeClass("button-primary__inactivo")
      .addClass("button-primary");
  });
});

// $("#pagar").click(function() {
//   $(".agregar-productos").slideUp(function(cb) {
//     $("#agregarProductos")
//       .removeClass("card-open__shadow")
//       .addClass("card-closed__shadow");
//     $(".completado12").toggle();
//   });
// });

function DelayRedirect() {
  var seconds = 3;
  var dvCountDown = document.getElementById("dvCountDown");
  var lblCount = document.getElementById("lblCount");
  setInterval(function() {
    seconds--;
    if (seconds == 0) {
      window.location = "loading-mensaje.html";
    }
  }, 500);
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
    $(".footer-condiciones").height(35);
    $("#info-condiciones").height(90);
  } else {
    $("#condiciones").show();
    $("#condiciones").removeClass("inactiveCondiciones");
    $("#condiciones").addClass("activeCondiciones");
    $(".footer-condiciones").height(310);
    $("#info-condiciones").height(40);
  }
});

$(document).ready(function() {
  $(".select-with-search").select2({
    theme: "bootstrap"
  });

  $("#datepicker-view-mode-1").datetimepicker({
    viewMode: "years",
    format: "MM/YYYY"
  });
  $("#datepicker-view-mode-2").datetimepicker({
    viewMode: "years",
    format: "MM/YYYY"
  });

  /* Slider */

  var deducibles = ["0", "3", "5", "10"];
  var responsabilidad_civil = ["500", "1000", "3000"];
  var sliderEdades = ["18", "23", "28"];
  var defaultDeducible = 5;

  $("#priceRight").text("$" + 45 * 600 + " ");
  $("#daysRight").text(" " + 30 + " días");
  $("#responsabilidadRight").text(" " + 1000 + " UF");
  $("#deducibleRight").text(" " + 3 + " UF");
  $(".slider")
    .slider({
      min: 0,
      max: 45,
      value: 30,
      step: 15
    })
    .slider("pips", {
      rest: "label",
      suffix: "días"
    })
    .slider("float")
    .on("slidechange", function(e, ui) {
      // $("#autoreemplazo").text("Usted ha seleccionado " + ui.value + " días");
      $("#autoreemplazo").text(
        "Un daño mayor puede ser fácilmente reparado en 30 días. Para facilitar tu movilidad, te recomendamos tomar este periodo de cobertura de un auto de reemplazo."
      );
      //   "¡Excelente elección!"
      // );
      $("#daysRight").text(" " + ui.value + " días");
      $("#priceRight").text("$" + ui.value * 600 + " ");
    });

  $(".slider2")
    .slider({
      min: 0,
      max: responsabilidad_civil.length - 1,
      value: 1
    })
    .slider("pips", {
      rest: "label",
      labels: responsabilidad_civil,
      suffix: "UF"
    })
    .slider("float", {
      labels: responsabilidad_civil
    })
    .on("slidechange", function(e, ui) {
      $("#responsabilidad-civil").text(
        // "Usted ha seleccionado " + responsabilidad_civil[ui.value] + " UF"
        "Una cobertura de 500 UF ó 1.000 UF de Responsabilidad Civil cubre los daños más frecuentes causados en los accidentes automovilísticos. Sin embargo, puede no ser suficiente si el siniestro genera pérdida total en el otro vehículo involucrado."
      );
      //   "¡Excelente elección!"
      // );
      $("#priceRight").text("$" + ui.value * 32190 + " ");
      $("#responsabilidadRight").text(+responsabilidad_civil[ui.value] + " UF");
    });

  $(".slider3")
    .slider({
      min: 0,
      max: deducibles.length - 1,
      value: 1
    })
    .slider("pips", {
      rest: "label",
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
      $("#priceRight").text("$" + ui.value * 10 + " ");
      $("#deducibleRight").text(+deducibles[ui.value] + " UF");
    });

  /*$(".slider-edad")
    .slider({
      min: 0,
      max: sliderEdades.length - 1,
      value: 0
    })
    .slider("pips", {
      rest: "label",
      prefix: "Más de ",
      labels: sliderEdades,
      suffix: " años"
    })
    .slider("float", {
      labels: sliderEdades
    })
    .on("slidechange", function(e, ui) {
      $("#edadConductor")
        .text
        // "El conductor tiene entre " +
        //   sliderEdades[ui.value] +
        //   " años" +
        //   " y" +
        //   " " +
        //   sliderEdades[ui.value] +
        //   " años"
        //Mensaje: El conductor tiene entre xx y xx años
        ();
    });

  // window.onload = form.f.init.register;

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
  //$("#modal-infodeducible").load("info-deducible.html");
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
