module.exports = {
  packagerConfig: {
    name: 'To-do App',
    executableName: 'ToDoApp',
    icon: './Assets/meowmeow',
    asar: true
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'ToDoApp',
        authors: 'Your Name',
        description: 'A simple todo application',
        exe: 'ToDoApp.exe',
        setupExe: 'ToDoApp-Setup.exe',
        setupIcon: './Assets/meowmeow.ico'
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['win32']
    }
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'github-user-name',
          name: 'github-repo-name'
        },
        prerelease: false,
        draft: true
      }
    }
  ]
}