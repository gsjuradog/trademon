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


export const loginErrorClear = () => {
  gsap.to('.login-error-container', 0.1, {
    opacity: 0,
  })
  gsap.to('.form-container, .overlay-panel, .overlay-create, .overlay-member, .login-banner', 0.01, {
    y: 0
  })
}

//Demo Start Animation
export const demoHeadAnimation = () => {
  gsap.to('.demo-img-head', 0.5,
  { scale: 1.3, repeat: -1})
}
export const demoArrowAnimation = () => {
  gsap.to('.demo-img-arrows', 0.5,
  { scale: 1.3, repeat: -1})
  gsap.to('.demo-img-arrows', 2, {
    delay: 1,
    rotation: -360,
    repeat: -1
  })
}

//Contact Seller animation
export const contactSellerAnimation = () => {
  gsap.from('.contact-seller-trade', 1.5, {
    x: -300,
    ease: "bounce.out"
  })
  gsap.from('.contact-seller-message', 1.5, {
    x: 300,
    ease: "bounce.out"
  })
  gsap.to('.contact-seller-container', 1, {
    opacity: 1
  })
}

//Upload avatar
export const avatarFormIn = () => {
  gsap.from('.upload-avatar-form', 2, {
    x: -300
  })
  gsap.to('.upload-avatar-form', 2, {
    opacity: 1
  })
}

export const avatarFormOut = () => {
  gsap.to('.upload-avatar-form', 2, {
    opacity: 0
  })
}
