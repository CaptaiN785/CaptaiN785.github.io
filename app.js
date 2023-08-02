
var body = document.getElementById("body");

var createLink = (link, text, target = "_self") =>{
    var a = document.createElement("a");
    a.href = link;
    a.innerHTML = text;
    a.target = target;
    return a;
}

var addAOS = (element, data) =>{
    var prefix = "data-aos";
    for(const [key, value] of Object.entries(data)){
        if(key === ""){
            element.setAttribute(prefix, value);
        }else{
            element.setAttribute(prefix+"-"+key, value);
        }
    }
}


var createNavBar = ()=>{

    var navWrap = document.createElement('nav');
    navWrap.classList.add('nav-wrap');
    var nav = document.createElement('div');
    navWrap.appendChild(nav);

    nav.classList.add("nav");
    var logoDiv = document.createElement("div");
    
    var closeDiv = document.createElement("div");

    // creating logo links
    var logo = createLink("#", "CaptaiN");
    var num = document.createElement("span");
    num.innerText = "785";
    num.classList.add("num");
    logo.append(num);

    nav.appendChild(logoDiv);
    logo.classList.add('logo');
    logoDiv.appendChild(logo);
    logoDiv.classList.add("logo-div");
    addAOS(logoDiv, {"":"fade-down", "duration":"400"});

    // creating links
    var linksDivWrapper = document.createElement("div");
    linksDivWrapper.classList.add("links-wrapper");
    
    var linksDiv = document.createElement("div");
    var home = createLink("#home", "<span>Home</span> <i class='fa-solid fa-house'></i>");
    var aboutme = createLink("#aboutme", "<span>About me</span> <i class='fa-solid fa-circle-info'></i>");
    var projects = createLink("#projects", "<span>Projects</span> <i class='fa-solid fa-print'></i>");
    var skills = createLink("#skills", "<span>Skills</span> <i class='fa-solid fa-book'></i>");
    var certificates = createLink("#certificates", "<span>Certifications</span> <i class='fa-solid fa-clipboard'></i>");
    var contact = createLink("#contact", "<span>Contact me</span> <i class='fa-solid fa-mobile-screen'></i>");
    linksDiv.appendChild(home);
    linksDiv.appendChild(aboutme);
    linksDiv.appendChild(projects);
    linksDiv.appendChild(skills);
    linksDiv.appendChild(certificates);
    linksDiv.appendChild(contact);
    linksDiv.classList.add("links");

    linksDivWrapper.appendChild(linksDiv);

    nav.appendChild(linksDivWrapper);
    // addAOS(linksDiv, {"":"fade-down","duration":"600", "delay":"400"});

    // Close button operations
    // later on
    return navWrap;
}

var createHomePage = () => {
    
    var home = document.createElement("section");
    home.id = "home";

    // left part to write the information
    var leftPart = document.createElement("div");
    leftPart.classList.add("left-part");
    var textDiv = document.createElement("div");

    var name = document.createElement("h2");
    name.classList.add("my-name");
    name.innerHTML = "Hi, I am";
    var firstLayer =  document.createElement('p');
    firstLayer.innerText = "Mukesh Kumar Thakur";
    var secondLayer =  document.createElement('p');
    secondLayer.innerText = "Mukesh Kumar Thakur";
    name.appendChild(firstLayer);    
    name.append(secondLayer);
    addAOS(name, {"":"fade-down-right", "duration":"700"})

    var designation = document.createElement("h1");
    designation.classList.add("designation");
    designation.innerText = "Data Science Aspirant";
    addAOS(designation, {"":"zoom-in-right", "duration":"1000"})
    
    var btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");
    var hireMe = document.createElement("a");
    hireMe.href = "#contact";
    hireMe.innerText = "Hire me";
    hireMe.classList.add("primary-btn");
    
    var downloadCV = document.createElement("a");
    downloadCV.href = "#";
    downloadCV.innerHTML = "Download CV <i class='fa-sharp fa-solid fa-download'></i>";
    btnDiv.appendChild(hireMe);
    // btnDiv.appendChild(downloadCV);
    addAOS(btnDiv, {"":"fade-up", "duration":"400", "delay":"500"})

    textDiv.appendChild(name);
    textDiv.appendChild(designation);
    textDiv.appendChild(btnDiv);

    leftPart.appendChild(textDiv);
    home.appendChild(leftPart);

    // var 
   
    var rightPart = document.createElement("div");
    rightPart.classList.add("right-part");
    addAOS(rightPart, {"":"fade-left", "duration":"700", "delay":"200"})

    var image = document.createElement("img");
    image.src = "./images/home.png";
    image.classList.add("image");

    
    rightPart.appendChild(image);

    home.appendChild(rightPart);


    return home;
}

var createAboutMe = () => {

    const aboutMe = document.createElement("section");
    aboutMe.id = "aboutme";

    // left part is for images
    var leftPart = document.createElement("div");
    leftPart.classList.add("left-part");
    addAOS(leftPart, {"":"fade-right", "duration": "800", "delay":"50"})

    var image = document.createElement("img");
    image.src = "./images/home.png";
    image.classList.add("image");
    leftPart.appendChild(image);
    aboutMe.appendChild(leftPart);

    var rightPart = document.createElement('div');
    rightPart.classList.add("right-part");
    addAOS(rightPart, {"":"fade-left", "duration": "1000", "delay":"50"})

    var textDiv = document.createElement("div");
    textDiv.classList.add("text-div");

    var heading = document.createElement("h1");
    heading.innerHTML = "About <span>me</span>";
    var about = document.createElement("p");
    about.innerHTML = "\
    Hi, I am Mukesh Kumar Thakur, a final year student, \
    pursuing Computer Science and Engineering from Chandigarh \
    University, Mohali, Punjab.<br><br>\
    \
    Passionate about implementing and launching new projects. \
    Ability to translate business requirements into technical solutions.\
    Looking to start my career as entry-level \
    software engineer/Data Analyst/Web developer \
    with a reputed firm driven by technology.\
    ";

    textDiv.appendChild(heading);
    textDiv.append(about);

    rightPart.appendChild(textDiv);

    aboutMe.appendChild(rightPart);
    return aboutMe;
}

var createProject = () => {

    var projects = document.createElement("section");
    projects.id = "projects";

    var container = document.createElement("div");
    container.classList.add("container");

    // Heading for projects
    var headDiv = document.createElement("div");
    headDiv.classList.add("head-div");
    var heading = document.createElement("h1");
    heading.innerHTML = "My <span>projects</span>";
    headDiv.appendChild(heading);
    addAOS(headDiv, {"":"flip-down", "duration":"1000"})

    // List of projects here.
    var projectGroup = document.createElement("div");
    projectGroup.classList.add("project-group");

    fetch("./projects.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        const projectList = data.projectList;

        let delay = 200;
        // let imgDelay = 200;

        projectList.forEach(project => {

            //single projects
            var card = document.createElement("div");
            card.classList.add("card");
            addAOS(card, {"":"zoom-in-up", "duration":"400","delay":""+delay+""})
            delay += 200;
            // this is for animation on hover
            var cardHover = document.createElement("div");
            cardHover.classList.add("card-hover");
            card.appendChild(cardHover);

            // For external link check if present of not.
            if(project.hasOwnProperty('link')){
                
                var externalLink = document.createElement("a");
                externalLink.href = project.link;
                externalLink.target = "_blank";
                externalLink.innerHTML = '<i class="fa-solid fa-up-right-from-square"></i>';
                externalLink.classList.add("external-link");
                card.appendChild(externalLink);
            }

            // Project image
            var cardImage = document.createElement("img");
            cardImage.src = project.src;
            cardImage.classList.add("card-image");
            // addAOS(cardImage, {"":"zoom-out-down", "duration":"300", "delay":""+imgDelay+""});
            // imgDelay += 200;
            
            // Project title
            var cardTitle = document.createElement("h2");
            cardTitle.innerText = project.title;
            cardTitle.classList.add("card-title");

            // appending the image and title to card.
            card.appendChild(cardImage);
            card.appendChild(cardTitle);
            projectGroup.appendChild(card);
        })
    })
    
    container.appendChild(headDiv);
    container.appendChild(projectGroup);

    // adding each project to group
    projects.appendChild(container);
    return projects;
}

var createContact = () =>{

    var contact = document.createElement("section");
    contact.id = "contact";

    var leftPart = document.createElement("div");
    leftPart.classList.add("left-part");
    addAOS(leftPart, {"":"fade-right", "duration":"600"})

    var headDiv = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.innerHTML = "Want to Contact";

    var h2 = document.createElement("h1");
    h2.innerHTML = "me?";

    headDiv.appendChild(h1);
    headDiv.appendChild(h2);
    leftPart.appendChild(headDiv);

    var image = document.createElement("img");
    image.src = "./images/contact-image.png"

    leftPart.appendChild(image);
    contact.appendChild(leftPart);
    
    var rightPart = document.createElement("div");
    addAOS(rightPart, {"":"fade-left", "duration":"600"})
    // On right create a form
    rightPart.classList.add("right-part");

    var form = document.createElement("form");
    form.action = "mailto:thakurmukeshkumar785@gmail.com";
    form.method = "GET";

    var inputDiv = document.createElement("div");
    inputDiv.classList.add("input-control");

    // Name input
    var nameLabel = document.createElement("label");
    nameLabel.innerText = "Your name";
    nameLabel.htmlFor = "nameInput";
    
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Name";
    nameInput.id = "nameInput";

    inputDiv.appendChild(nameLabel);
    inputDiv.appendChild(nameInput);
    form.appendChild(inputDiv);

    // Email input
    var inputDiv = document.createElement("div");
    inputDiv.classList.add("input-control");

    var emailLabel = document.createElement("label");
    emailLabel.innerText = "Your name";
    emailLabel.htmlFor = "emailInput";
    
    var emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Email";
    emailInput.id = "emailInput";

    inputDiv.appendChild(emailLabel);
    inputDiv.appendChild(emailInput);
    form.appendChild(inputDiv);

    // Now message box
    var inputDiv = document.createElement("div");
    inputDiv.classList.add("input-control");

    var messageLabel = document.createElement("label");
    messageLabel.innerText = "Your message";
    messageLabel.htmlFor = "messageInput";
    
    var messageInput = document.createElement("textarea");
    messageInput.classList.add("textarea");
    messageInput.placeholder = "Message";
    messageInput.id = "messageInput";

    inputDiv.appendChild(messageLabel);
    inputDiv.appendChild(messageInput);
    form.appendChild(inputDiv);


    // Button div
    var buttonDiv = document.createElement("div");
    var submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.innerHTML = "Send Message <i class='fa-solid fa-paper-plane'></i>";
    submitButton.classList.add("primary-btn");
    addAOS(submitButton, {"":"fade-up", "duration":"500", "delay":"600", "anchor-placement":"bottom-bottom"})

    buttonDiv.appendChild(submitButton);
    form.appendChild(buttonDiv);

    rightPart.appendChild(form);
    contact.appendChild(rightPart);

    return contact;
}

var createSkills = () =>{

    var skills = document.createElement("section");
    skills.id = "skills";

    var headDiv = document.createElement("div");
    addAOS(headDiv, {"":"flip-up", "duration":"600"})
    headDiv.classList.add("head-div");
    var h1 = document.createElement("h1");
    h1.innerHTML = "My <span>skills<span>";
    headDiv.appendChild(h1);


    var skillset = document.createElement("div");
    skillset.classList.add("skillset");

    fetch("./skillset.json")
    .then(response =>{
        return response.json();
    })
    .then(allSkills =>{

        const allSkillSet = allSkills.skillset;

        let skillLength = allSkillSet.length;
        let counter = 1;

        allSkillSet.forEach(skill =>{

            var skillDiv = document.createElement("div");

            var skillCategory = document.createElement("h2");
            addAOS(skillCategory, {"":"fade-down", "duration":"400"});
            skillCategory.innerText = skill.category;
            skillDiv.appendChild(skillCategory);

            var duration = 300;
            var delay = duration;
            var speed = duration;
        
            skill.skills.forEach(curSkill =>{
                var p = document.createElement("p");
                addAOS(p, {"":"fade-up", "duration":""+duration+"", "delay":""+delay+""})
                delay += speed;
                p.innerText = curSkill;
                skillDiv.appendChild(p);
            })
            skillset.appendChild(skillDiv);
            if(counter !== skillLength){
                 // creating a seperator to seperate categories
                var seperator = document.createElement("div");
                addAOS(seperator, {"":"fade-in", "duration":"500"})
                seperator.classList.add("seperator");
                seperator.innerHTML= "";
                skillset.appendChild(seperator);
            }
            counter++;
        })
    })


    skills.appendChild(headDiv);
    skills.appendChild(skillset);
    return skills;
}

var createCertificate = () => {
    
    var certificates = document.createElement("section");
    certificates.id = "certificates";


    var headDiv = document.createElement("div");
    addAOS(headDiv, {"":"fade-down", "duration":"400"})
    headDiv.classList.add("head-div");

    var heading = document.createElement("h1");
    heading.innerHTML = "My <span>certifications</span>";
    headDiv.appendChild(heading);

    // It will store all the certificates.
    var container = document.createElement("div");
    container.classList.add("container");

    fetch("./certificates.json")
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        const certifications = data.certificates;

        let cnt = 0;
        let size = certifications.length/2;
        let duration = 200, delay = 0;

        certifications.forEach(certificate => {

            var certificateContainer = document.createElement("div");
            certificateContainer.classList.add("certificate-container");
            if(cnt < size){
                addAOS(certificateContainer, 
                    {"":"fade-right","offset":"300","easing":"ease-in-sine","delay":""+delay+"", "duration":""+duration+""});
                delay = duration;
                duration += 200;        
            }else{
                addAOS(certificateContainer, 
                    {"":"fade-left","offset":"300","easing":"ease-in-sine","delay":""+delay+"", "duration":""+duration+""});
                delay = duration;
                duration -= 200;        
            }
            
            cnt++;

            var viewBtn = document.createElement("button");
            viewBtn.type = "button";
            viewBtn.innerHTML = '<i class="fa-sharp fa-solid fa-eye"></i>';
            certificateContainer.appendChild(viewBtn);

            viewBtn.addEventListener("click", (e) =>{
                var modal = document.createElement("modal");
                modal.classList.add("modal");

                var closeBtn = document.createElement("button");
                closeBtn.type = "button";
                closeBtn.innerHTML = 'X';
                closeBtn.addEventListener("click", () =>{
                    container.removeChild(modal);
                })

                modal.appendChild(closeBtn);

                var iframe = document.createElement("embed");
                iframe.src = certificate.link;
                
                // when image comes it strech the image
                // this protects to strech the image.
                if(certificate.type === "img"){
                    modal.style.maxWidth = "max-content";
                }

                modal.appendChild(iframe);

                container.appendChild(modal);
            })
            
            var thumbnail = document.createElement("div");
            thumbnail.classList.add("thumbnail");

            var thumbImage = document.createElement("img");
            thumbImage.src = certificate.thumbnail;
            thumbnail.appendChild(thumbImage);
            
            certificateContainer.appendChild(thumbnail);

            var textContainer = document.createElement("div");
            textContainer.classList.add("text-container");

            var title = document.createElement("h3");
            title.innerText = certificate.title;
            textContainer.appendChild(title);

            // var issuedOn = document.createElement("p");
            // issuedOn.innerText = "Issued on: " + certificate.issuedon;
            // textContainer.appendChild(issuedOn);

            // var issuedBy = document.createElement("p");
            // issuedBy.innerText = "Issued by: " + certificate.issuedby;
            // textContainer.appendChild(issuedBy);

            certificateContainer.appendChild(textContainer);
            container.appendChild(certificateContainer);
        })
    })
    
    certificates.appendChild(headDiv);
    certificates.appendChild(container);
    return certificates;
}

var createSocialLink = () =>{

    var socialLink = document.createElement("div");
    socialLink.id = "social-link";
    addAOS(socialLink, {"":"zoom-in-right", "duration":"1000"})
    // LinkedIn
    // Instagram
    // Github
    // Leetcode

    fetch("./social-links.json")
    .then(res =>{
        return res.json()
    })
    .then(data =>{
        links = data.social;
        links.forEach(link =>{
            var tag = document.createElement("a");
            addAOS(tag, {"":"zoom-in", "delay":"200", "duration":"800"})
            tag.href = link.link;
            tag.title = link.title;
            tag.target = "_blank";
            tag.innerHTML = link.innerHTML;
            socialLink.appendChild(tag);
        })
    })

    return socialLink;
}

var socialLink = createSocialLink();
body.appendChild(socialLink);

var nav = createNavBar();
body.appendChild(nav);

var home = createHomePage();
body.appendChild(home);

const aboutme = createAboutMe();
body.appendChild(aboutme);

const projects = createProject();
body.appendChild(projects);

const skills = createSkills();
body.appendChild(skills);

const certificates = createCertificate();
body.appendChild(certificates);

const contact = createContact();
body.appendChild(contact);

window.scrollY = "3000px";