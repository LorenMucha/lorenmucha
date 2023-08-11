const enGB = {
  "header": {
    "expertise": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Expertise"]);
    },
    "cv": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Resume"]);
    },
    "contact": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Contact"]);
    },
    "greet": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Hi! I'm Loren Mucha"]);
    },
    "role": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fullstack Software Developer"]);
    },
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["I'm a Fullstack Software Developer with a passion for creative solutions. From user interfaces to backend architecture, I craft digital worlds. Explore my projects and the process behind the code right here. "]);
    }
  },
  "cv": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Resume"]);
  },
  "work": {
    "header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Projects"]);
    },
    "ioer_monitor": {
      "intro": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["The <a class='active-link' href='https://monitor.ioer.de' target='_blank'>I\xD6R-Monitor</a> is a web GIS to intuitively answer questions about land use in Germany."]);
      }
    },
    "climbing_diary": {
      "intro": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Virtual diary with statistical analysis of personal performance, as a native Android App."]);
      }
    },
    "max_jacob_theater": {
      "header": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Max Jacob Theater"]);
      },
      "intro": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Theaterwebsite of the traditional club 'Hohnsteiner Kasper e.V.' as a CMS system with ticket sales and program information."]);
      }
    },
    "monitor_api": {
      "header": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Monitor API"]);
      },
      "intro": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["REST API for geodata processing within the <a class='active-link' href='https://http://sora.git.gesis.org' target='_blank'>Sora-research project</a> with user management."]);
      }
    },
    "land_use_monitor": {
      "header": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Land Use Monitor DE"]);
      },
      "intro": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["It provides information on the area structure and its development, as well as comprehensive data on the quality across Germany, as a <b>app</b>."]);
      }
    }
  },
  "tools": {
    "languages": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Programming Languages"]);
    }
  }
};

export { enGB as default };
//# sourceMappingURL=en-GB-3e481955.mjs.map
