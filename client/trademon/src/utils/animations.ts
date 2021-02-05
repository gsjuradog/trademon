import { gsap } from 'gsap';

//Login / SignUp Animations
export const setUp = () => {
  gsap.to('.overlay-member', 0.01, {
    y: -600
  })
}

export const panelRight = () => {
  gsap.to('.overlay-panel', 0.6, {
    xPercent: 100,
    ease: "back.inOut(1.7)"
  })
  gsap.to('.overlay-create', 1.5, {
    opacity: 0,
    y: -600,
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
  gsap.to('.overlay-member', 1.5, {
    opacity: 0,
    y: -600,
    ease: "elastic.out(1, 0.8)"
  })
}

export const loginError = () => {
  gsap.to('.login-error-container', 2, {
    opacity: 1
  })
}

