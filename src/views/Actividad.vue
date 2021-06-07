<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.color-primario.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/emparejamiento.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          .h4 ACTIVIDAD DIDÁCTICA 
        p.mb-4 Afianzando el conocimiento
        .tarjeta.color-primario.p-3.text-white
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p Reafirmar el conocimiento obtenido sobre las fases del proceso de evaluación del sistema tipo de la CNSC.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('actividad/story.html')" target="_blank" style="background-color:#00FFFF;")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
export default {
  name: 'Actividad',
}
</script>
<style lang="sass"></style>
