/* message start*/
function messageOn() {
  document.getElementById("message-btn-on").style.display = "flex";
}
function messageOff() {
  document.getElementById("message-btn-on").style.display = "none";
}
/* message end*/
const handle_home_page_sec_1_button_click = (el) => {
  let index = el.getAttribute("data-index");
  handle_home_page_sec_1_go_to_index(index);
};
const handle_home_page_sec_1_next_click = () => {
  let buttons = document.querySelectorAll(
    ".buttons-container .single-tabs-btn"
  );
  let index = 0;
  buttons.forEach((btn) => {
    if (btn.classList.contains("active"))
      index = btn.getAttribute("data-index");
  });
  if (Number(index) > 3) {
    index = 1;
  } else {
    index = Number(index) + 1;
  }
  handle_home_page_sec_1_go_to_index(index);
};
const handle_home_page_sec_1_go_to_index = (
  index //number is 1 - 4
) => {
  console.log("index", index);
  let tab_btn = document.querySelector(
    `.buttons-container .single-tabs-btn:nth-child(${index})`
  );
  let dot_btn = document.querySelector(
    `.sec-1-tab-dots .sec-1-tab-single-dot:nth-child(${index})`
  );
  let tab_content = document.querySelector(
    `.sec-1-content-container .single-tab-content[data-index="${index}"]`
  );
  $(".sec-1-tab-dots .sec-1-tab-single-dot").removeClass("active");
  $(".buttons-container .single-tabs-btn").removeClass("active");
  $(".sec-1-content-container .single-tab-content").removeClass("active");
  tab_btn.classList.add("active");
  dot_btn.classList.add("active");
  tab_content.classList.add("active");
};
