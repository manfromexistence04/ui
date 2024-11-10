const data = [
    {
        name: "button-icon-right",
        type: "registry:example",
        registryDependencies: ["buttons"],
        files: ["example/buttons/icon-right.tsx"],
    },
    {
        name: "button-icon-left",
        type: "registry:example",
        registryDependencies: ["buttons"],
        files: ["example/buttons/icon-left.tsx"],
    },
    {
        name: "button-gooey-right",
        type: "registry:example",
        registryDependencies: ["buttons"],
        files: ["example/buttons/gooey-right.tsx"],
    },
    {
        name: "button-gooey-left",
        type: "registry:example",
        registryDependencies: ["buttons"],
        files: ["example/buttons/gooey-left.tsx"],
    },
    {
        name: "button-shine",
        type: "registry:example",
        registryDependencies: ["buttons"],
        files: ["example/buttons/shine.tsx"],
    },
    {
        name: "button-ring-hover",
        type: "registry:example",
        registryDependencies: ["buttons"],
        files: ["example/buttons/ring-hover.tsx"],
    },
    {
        name: "button-link-hover-1",
        type: "registry:example",
        registryDependencies: ["buttons"],
        files: ["example/buttons/link-hover-1.tsx"],
    },
    {
        name: "button-link-hover-2",
        type: "registry:example",
        registryDependencies: ["buttons"],
        files: ["example/buttons/link-hover-2.tsx"],
    },
    {
        name: "blur-in",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/blur-in.tsx"],
    },
    {
        name: "rotate-text",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/rotate-text.tsx"],
    },
    {
        name: "fade-down-stagger",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/fade-down-stagger.tsx"],
    },
    {
        name: "fade-up-stagger",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/fade-up-stagger.tsx"],
    },
    {
        name: "letter-pull-up",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/letter-pull-up.tsx"],
    },
    {
        name: "multi-direction-slide",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/multi-direction-slide.tsx"],
    },
    {
        name: "staggered-fade-in",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/staggered-fade-in.tsx"],
    },
    {
        name: "typing-effect",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/typing-effect.tsx"],
    },
    {
        name: "velocity-scroll",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/velocity-scroll.tsx"],
    },
    {
        name: "word-pull-up",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/word-pull-up.tsx"],
    },
    {
        name: "separate-away",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/separate-away.tsx"],
    },
    {
        name: "gradual-spacing",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/gradual-spacing.tsx"],
    },
    {
        name: "slight-flip",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/slight-flip.tsx"],
    },
    {
        name: "wavy-text",
        type: "registry:example",
        registryDependencies: ["text"],
        files: ["example/texts/wavy-text.tsx"],
    },
    {
        name: "tags-input-demo",
        type: "registry:example",
        registryDependencies: ["button", "form", "tags-input-demo"],
        files: ["example/tags-input-demo.tsx"],
    },
    {
        name: "password-input-demo",
        type: "registry:example",
        registryDependencies: ["button", "form", "password-input-demo"],
        files: ["example/password-input-demo.tsx"],
    },
    {
        name: "file-upload-demo",
        type: "registry:example",
        registryDependencies: ["button", "form", "file-upload-demo"],
        files: ["example/file-upload-demo.tsx"],
    },
    {
        name: "phone-input-demo",
        type: "registry:example",
        registryDependencies: ["button", "form", "phone-input-demo"],
        files: ["example/phone-input-demo.tsx"],
    },
    {
        name: "smart-date-time-picker-demo",
        type: "registry:example",
        registryDependencies: ["button", "form", "smart-date-time-picker-demo"],
        files: ["example/smart-date-time-picker-demo.tsx"],
    },
    {
        name: "date-time-picker-demo",
        type: "registry:example",
        registryDependencies: ["button", "form", "date-time-picker-demo"],
        files: ["example/date-time-picker-demo.tsx"],
    },
    {
        name: "multi-select-demo",
        type: "registry:example",
        registryDependencies: ["multi-select"],
        files: ["example/multi-select-demo.tsx"],
    },
    {
        name: "location-input-demo",
        type: "registry:example",
        registryDependencies: ["location-input"],
        files: ["example/location-input-demo.tsx"],
    },
];

data.forEach(item => {
    item.files = [{
        path: item.files[0],
        type: 'registry:example'
    }];
});

console.dir(data, { depth: null });