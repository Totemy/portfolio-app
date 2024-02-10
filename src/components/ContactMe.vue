<template>
  <div class="contact-me">
    <div class="contact-me__sidebar">
      <div class="sidebar__header">
        contact-me
      </div>
      <div class="sidebar__items">
        <div class="sidebar__mail">
          ihor.stryzhov@gmail.com
        </div>
        <div class="sidebar__phone">
          +380 98 202 44 17
        </div>
      </div>
      <div class="sidebar__header">
        find-me-also-in
      </div>
    </div>
    <div class="contact-me__tab">
      <div class="tab__items">
        <div class="tab__item">
          contact-me-fields
        </div>
      </div>
      <div class="tab__objects">
        <div class="tab__object">
          <div>
            <h4>_name:</h4>
            <input class="contact-me__input" type="text"  v-model="name" @input="handleInputChange" placeholder="John Krasinsky"/>
          </div>
          <div>
            <h4>_email:</h4>
            <input class="contact-me__input" type="text"  v-model="email" @input="handleInputChange" placeholder="somemail@gmail.com"/>
          </div>
          <div>
            <h4>_massage:</h4>
            <textarea class="contact-me__input"  id="massage"  v-model="massage" name="massage" @input="handleInputChange" rows="4" cols="30" placeholder="Some text"></textarea>
          </div>
          <div class="contact-me__button">
            <button class="btn" @click="sendEmail">submit-message</button>
          </div>
        </div>
        <div class="tab__object">
          <div class="contact-me__code">
            <span style="color: #C98BDF"> const </span> button <span style="color: #C98BDF"> = </span> document.querySelector(<span style="color: #FEA55F">'#sendBtn'</span>); <br/>
            <br/>
            <span style="color: #C98BDF"> const </span> message <span style="color: #C98BDF"> = </span> {<br/>
            <div style="padding-left: 15px "> name: <span style="color: #FEA55F"> "{{name}}",</span> <br/>
            email: <span style="color: #FEA55F"> "{{email}}"</span> ,<br/>
            message: <span style="color: #FEA55F">"{{massage}}" </span> ,<br/>
            date: <span style="color: #FEA55F">"{{ formatDate(date) }}" </span> <br/>
            </div>
            }<br/>
            <br/>
            button.addEventListener(<span style="color: #FEA55F"> 'click'</span> , () <span style="color: #C98BDF">=> </span> {<br/>
            <span style="padding-left: 15px"> form.send(message);<br/></span>
            })<br/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { sendEmail } from '@/services/EmailService';
export default {
  data(){
    return{
      name: '',
      email: '',
      massage: '',
      date: new Date()
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', options);
    },
    async sendEmail() {
      const templateParams = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      try {
        const response = await sendEmail(templateParams);
        console.log('Email sent successfully:', response);
      } catch (error) {
        console.error('Failed to send email:', error);
      }
    },
  }
}
</script>