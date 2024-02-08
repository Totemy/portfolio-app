<template>
  <div class="contact-me">
    <div class="contact-me__sidebar">
      <div class="sidebar__header">
        contact-me
      </div>
      <div class="sidebar__items">
        <div class="sidebar__items-mail">
          ihor.stryzhov@gmail.com
        </div>
        <div class="sidebar__items-phone">
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
            <textarea class="contact-me__input"  id="massage"  v-model="massage" name="massage" @input="handleInputChange" rows="4" cols="50" placeholder="Some text"></textarea>
          </div>
          <div class="contact-me__button">
            <button class="btn">submit-message</button>
          </div>
        </div>
        <div class="tab__object">
          <div class="contact-me__code">
            const button = document.querySelector('#sendBtn'); <br/>
            <br/>
            const message = {<br/>
            name: "Jonathan Davis",<br/>
            email: "",<br/>
            message: "",<br/>
            date: "Thu 21 Apr"<br/>
            }<br/>
            <br/>
            button.addEventListener('click', () => {<br/>
            form.send(message);<br/>
            })<br/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name: '',
      email: '',
      massage: '',
    }
  }
}
</script>