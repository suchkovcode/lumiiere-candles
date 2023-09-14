<template>
   <div class="headerCanvas">
      <p class="headerCanvas__title">
         <slot></slot>
      </p>
      <button class="headerCanvas__close" aria-label="Close canvas btn" @click="$emit('closeCanvas', false)"></button>
   </div>
</template>

