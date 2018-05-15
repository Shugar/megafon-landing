import $ from 'jquery'
import 'slick-carousel'

$(document).ready(() => {
  const slidesCount = $('.slider').find('.slider__slide').length
  $('.js-amount').html(`${slidesCount}`)

  $('.slider').slick({
    slidesToShow: 3,
    infinite: true,
    arrows: true
  })

  $('.slider').on('beforeChange', (e, slick, curr, next) => {
    $('.js-curr').html(`${next + 1}`)
  })
})