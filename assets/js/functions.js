function openNav2() {
  $("#notificacion-envioCorreo").addClass("sideNav_open");
}

function closeNav2() {
  $("#notificacion-envioCorreo").removeClass("sideNav_open");
}

/* Modal */

function openNav() {
  $("#mySidenav").addClass("sideNav_open");
}

function closeNav() {
  $("#mySidenav").removeClass("sideNav_open");
}

var pageURL = $(location).attr("href");
if (pageURL == "http://localhost:3000/1-b.html") {
  setTimeout(function() {
    openNav();
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
};
var show7 = function() {
  document.getElementById("inspeccion-domicilio").style.display = "block";
  document.getElementById("centro-compania").style.display = "none";
  document.getElementById("autoInspeccion").style.display = "none";
};

var show8 = function() {
  document.getElementById("autoInspeccion").style.display = "block";
  document.getElementById("centro-compania").style.display = "none";
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
    $(".datos-contratante__sinpatente").slideDown(function(cb) {
      $("#container-datos-contratante__sinpatente")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
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
    $(".completado").toggle();
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
    $(".completado").toggle();
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
    $(".completado").toggle();
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
    $(".seguro-incluye_infomas").show();
    $("#container-elige-plan__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completar-datos__vehículo__sinpatente").slideDown(function(cb) {
      $("#completar-datos-vehiculo__sinpatente")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
    });
  });
});

$("#seleccionPlan2__sinpatente").click(function() {
  $(".eligePlan").slideUp(function(cb) {
    openNav2();
    $(".seguro-incluye_infomas").show();
    $("#container-elige-plan__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completar-datos__vehículo__sinpatente").slideDown(function(cb) {
      $("#completar-datos-vehiculo__sinpatente")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
    });
  });
});

$("#seleccionPlan3__sinpatente").click(function() {
  $(".eligePlan").slideUp(function(cb) {
    openNav2();
    $(".seguro-incluye_infomas").show();
    $("#container-elige-plan__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completar-datos__vehículo__sinpatente").slideDown(function(cb) {
      $("#completar-datos-vehiculo__sinpatente")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
    });
  });
});

$("#editar_plan").click(function() {
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
    $(".completar-datos-personales__sinpatente").slideDown(function(cb) {
      $("#completar-datos-direccion__sinpatente")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
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

/* Close and change card-shadow show - hide  / Datos de personales */

$("#continuar-datos-personales__sinpatente").click(function() {
  $(".completar-datos-personales__sinpatente").slideUp(function(cb) {
    $("#completar-datos-vehiculo__sinpatente")
      .removeClass("card-open__shadow")
      .addClass("card-closed__shadow");
    $(".completado4").toggle();
    $(".seleccionar-inspeccion__sinpatente").slideDown(function(cb) {
      $("#seleccionar-inspeccion__sinpatente")
        .removeClass("card-closed__shadow")
        .addClass("card-open__shadow");
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
    });
  });
});

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
    $("body").addClass("loaded");
    // $('h1').css('color','#222222');
  }, 3000);

  $("#modal-preguntasfrecuentes").load("preguntas-frecuentes.html");
});
