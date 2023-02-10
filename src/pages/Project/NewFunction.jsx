import img1 from '../../assets/projects/ielts2.jpg';
import img2 from '../../assets/projects/ielts3.jpg';
import img3 from '../../assets/projects/ielts4.jpg';
import img4 from '../../assets/projects/ielts7.jpg';
import img5 from '../../assets/projects/ielts0.jpg';

export function newFunction(t) {
  return [
    { img: img1, id: 1, linke: "singularproject1", title: t("homeProjects.subTitle1"), item: t("homeProjects.title1") },
    { img: img2, id: 2, linke: "singularproject1", title: t("homeProjects.subTitle3"), item: t("homeProjects.title3") },
    { img: img3, id: 3, linke: "singularproject1", title: t("homeProjects.subTitle6"), item: t("homeProjects.title_Shaxlo") },
    { img: img4, id: 4, linke: "singularproject1", title: t("homeProjects.subTitle6"), item: t("homeProjects.title6") },
    { img: img5, id: 5, linke: "singularproject1", title: t("homeProjects.subTitle6"), item: t("homeProjects.title6") },
  ];
}
