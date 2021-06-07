<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
      footer
  BarraAvance

</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
}
</script>

<style lang="sass">
.app

.contenedor-principal
  display: flex
  align-items: flex-start

.seccion-principal
  width: 100%

  &--barra-avance-open
    .curso-main-container
      padding-bottom: 80px !important
body
  padding-right: 0px !important
.modal
  z-index: 9999999 !important
.modal-backdrop
  z-index: 999999 !important
.banner-interno__titulo__icono
  background-color: #ffffff !important
.banner-interno__titulo h1
  color: #ffffff !important
.titulo-quinto h6
  border-bottom: 4px solid #522981
  display:inline !important
  padding: 0px 12px 1px 12px;
.titulo-quinto>:before
    content: ""
    display: block
    position: absolute
    transform: translate(-18%, 255%)
    width: 0
    height: 0
    border-left: 10px solid transparent
    border-right: 10px solid transparent
    border-top: 10px solid
    left: 50%
    border-top-color: #522981
</style>
