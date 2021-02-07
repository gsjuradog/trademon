

export default function setAppraisalImage(appraisal: number| undefined)  {
  switch(appraisal) {
    case 0 : return("https://res.cloudinary.com/techlog-cloud-key/image/upload/v1612705445/Star0_krjjeh.png");
    case 1 : return("https://res.cloudinary.com/techlog-cloud-key/image/upload/v1612705445/Star1_gvfybl.png");
    case 2 : return("https://res.cloudinary.com/techlog-cloud-key/image/upload/v1612705445/Star2_byidda.png");
    case 3 : return("https://res.cloudinary.com/techlog-cloud-key/image/upload/v1612705445/Star3_hku77d.png");
    case 4 : return("https://res.cloudinary.com/techlog-cloud-key/image/upload/v1612705445/Star4_ypibwp.png");
  }
}