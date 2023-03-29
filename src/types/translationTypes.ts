export type Translation = {
  navbar: {
    link1: string;
    link2: string;
    link3: string;
  };
  heroSection: {
    title: string;
    subtitle: string;
    content: string;
    button1: string;
    button2: string;
  };
  aboutSection: {
    title: string;
    content: {
      sectionP1: string;
      sectionP2: string;
      sectionP3: string;
    };
  };
  skillsSection: {
    title: string;
    titleCard1: string;
    contentCard1: string;
    titleCard2: string;
    contentCard2: string;
  };
  educationSection: {
    title: string;
    school1: {
      title: string;
      date: string;
      school: string;
    };
    school2: {
      title: string;
      date: string;
      school: string;
    };
  };
  experienceSection: {
    title: string;
    jobs: {
      job1: {
        title: string;
        date: string;
        company: string;
        description: {
          p1: string;
          p2: string;
          p3: string;
        };
      };
      job2: {
        title: string;
        date: string;
        company: string;
        description: {
          p1: string;
        };
      };
      job3: {
        title: string;
        date: string;
        company: string;
        description: {
          p1: string;
        };
      };
    };
  };
  footerSection: {
    link1: string;
    link2: string;
    link3: string;
    link4: string;
    link5: string;
    link6: string;
  };
  contactPage: {
    title: string;
    subtitle: string;
    form: {
      label_name: string;
      name: string;
      label_email: string;
      email: string;
      label_message: string;
      message: string;
      button: string;
    };
  };
};
