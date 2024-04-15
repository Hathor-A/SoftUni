function projectCreation(input) {
    const nameArchitect = input[0];
    const nbProjects = Number(input[1]);
    const nbHours = Number(input[1] * 3);
    console.log(`The architect ${nameArchitect} will need ${nbHours} hours to complete ${nbProjects} project/s.`);
    }
    projectCreation(['George', '4']);