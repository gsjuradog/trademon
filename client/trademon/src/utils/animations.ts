import { gsap } from 'gsap';

//Login / SignUp Animations
export const panelRight = () => {
  gsap.to('.overlay-panel', 0.6, {
    xPercent: 100,
    ease: "back.inOut(1.7)"
  })
  gsap.to('.overlay-create', 0.8, {
    opacity: 0,
    y: -300,
    ease: "elastic.out(1, 0.8)"
  })
  gsap.to('.overlay-member', 0.8, {
    delay: 0.6,
    opacity: 1,
    y: 0
  })
}

export const panelLeft = () => {
  gsap.to('.overlay-panel', 0.6, {
    xPercent: 0,
    ease: "back.inOut(1.7)"
  })
  gsap.to('.overlay-create', 0.8, {
    delay: 0.6,
    opacity: 1,
    y: 0
  })
  gsap.to('.overlay-member', 0.8, {
    opacity: 0,
    y: -300,
    ease: "elastic.out(1, 0.8)"
  })
}

export const loginError = () => {
  gsap.to('.login-error-container', 1, {
    opacity: 1,
    zindex: 10
  })
  gsap.to('.form-container, .overlay-panel, .overlay-create, .overlay-member', 1, {
    opacity: 0
  })
}

export const loginErrorClear = () => {
  gsap.to('.login-error-container', 1, {
    opacity: 0,
    zindex: 0
  })
  gsap.to('.form-container, .overlay-panel, overlay-create, .overlay-member', 1, {
    opacity: 1
  })
}
