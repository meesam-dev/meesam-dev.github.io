# Welcome to my Portfolio Website Source Code

Mohammedmeesam.me is a portfolio website showcasing my projects and background.

The website is static and is hosted on github pages and the domain name is .me because I got it for free as a student. I will be changing it once it expires.

The contact form works using a service that allows for the “POST” to be done on another website for free, and I just had to use some JavaScript to make it happen – more details further down.

The reason I opted for a static website and another website to handle the contact form is simple- there is no point is hosting a dynamic website when it’s a simple portfolio, there is no reason to pay for paid hosting and enable backend coding even though I might do so in the future to test out my web development skills as I continue to improve myself.

## Short Guide to replicate

## Hosting and getting a Domain

1.	Get a domain name. I got mine from namecheap using github student developer pack.
2.	Upload your files on github
3.	Create a custom domain name on github pages> settings. This will create a CNAME that is required to connect your host with domain.
4.	Add github A Records on your domain. If hosting on github you can find info on https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site
5.	Edit your website and push to github

## Editing the template

1.	Get your template or make it yourself
2.	Edit the data according to what you want it.
3.	Create a Modal (Pop up box) for viewing projects.
    -	CSS
Refer to mod.css in the source code
    -	Make Image and Text wrapping in the Modal and make sure Modal is Flex for different devices
```markdown
@media screen and (max-width:786px){
	/*Modal*/
	#two .modalimage{
		float:none;
		width:100%;
		padding-right:none;
		padding-left:none;
		padding-bottom:5px;
	}
	#two .modal{
		padding-top:20px;
	}
	#two .modal-content
	{	width:90%;
	}		
	#two .previousSlide, #two .nextSlide{
		padding:16px;
	}
}
```
-	Animation for the Modal (See section 5. Attention to details)
-	Index and Selection of Each Box to keep 1 JS for all boxes instead of multiple for each.
Refer to modal.js in the source code
-	Right and Left Arrow key in each Project box
Refer to modal.js in the source code
-	To add the files/ blogs to the modals use https://www.aconvert.com/document/docx-to-html/ and change some things accordingly.

4.	Making the contact form work- I found 2 ways to make it work effectively.
    - Using smpt.js 
      - Mail.js is a javascript file/library that allows for a static website to use mail.js and their backend to process the request.
      -	You will need an emailing list/forwarding service that allows you to forward emails using your email but their forwarding service
      - Visit [smtpjs.com](https://smtpjs.com) for information and play around with it
      - Use elasticemail or sendinblue or a similar email forwarding service, note that these email services may send any messages received in the junk so you will need to make an exception (you will receive the message in your contact form using your email id to your email from your website)
      - I have it as another project on github and this website you can use that to see the code since the mail.js code is without javascript to email the exact message from your form its more like a service that can notify you someone used the contact form (more specifically your website users can subscribe to a mailing list to get messages you want them to receive)
    -	Using [formspree.io](https://formspree.io)
        - This is the method I used because it was just far easier.
        - Only issue with this is that the send message will open a new tab and redirect you to formspree.io website since it’s a free service and they want to advertise for providing a service.
        - I used ajax to circumvent this and post the request without redirection. You can see mail.js on github 

5.	Attention to Details
    - To prevent Modal opening making the main page scroll to the top
      - ` <a href=”javascript: return false;”></a> `
    
    - _Another way is to just not use href and simply use onclick and add a class with a style cursor:pointer_
      - ` <a onclick="openModal();currentSlide(1);" style=”cursor:pointer;”></a> `
    - Show Alert Box when Email is sent and close button for it. Do CSS for box how you want See mod.css on github
      - ` $('#progress').show(); //to show the message is sent alert; it will show the hidden div`
      - `<div style="display:none" id="progress">	`
      - `<span class="closebtn" onclick="this.parentElement.style.display='none';"> &times; <!—This will add a close button -->``</span>`
      - `Your message has been sent successfully` `</div>`

    -	Scroll to Top
    - Animation
```
For the modal/item to animate

-webkit-animation: scale-modal 0.5s ease-in-out both;
animation: scale-modal 0.5s ease-in-out both;

Adding the actual style

@-webkit-keyframes scale-modal {
	from {-webkit-transform:scale(0.4)} 
	to {-webkit-transform:scale(1)}
}
@keyframes scale-modal {
	from {transform:scale(0.4)} 
	to {transform:scale(1)}
}
```
6.	Add Analytics to track traffic and other data on the website.
    - Just add the code straight from google analytics
7.	Once your template is ready, push it to github or any domain to merge and go live.

