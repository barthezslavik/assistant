function start() {
    switch(location.pathname) {
        case '/join':
            click('#company_forms_company_info_create_form_hire_drivers_true');
            click('#dot_account_is_carrier_true');
            fill('#dot_account_us_dot','1231231');
        case '/join_by_dot_number':
        case '/registrations/company_info':
            select('#company_forms_company_info_create_form_state',   "Arizona");
            fill('#company_forms_company_info_create_form_name',      "Company Name");
            fill('#company_forms_company_info_create_form_address_1', "Address");
            fill('#company_forms_company_info_create_form_city',      'City');
            fill('#company_forms_company_info_create_form_zip_code',  '12312');
            fill('#company_forms_company_info_create_form_best_email_voe', 'voe@gmail.com');
            break;
        case '/registrations/user_info':
        case '/registrations/user_info/new':
            fill('[name="company_forms_user_info_create_form[first_name]"]',   "First name");
            fill('[name="company_forms_user_info_create_form[last_name]"]',    "Last name");
            fill('[name="company_forms_user_info_create_form[email]"]',        'company@gmail.com');
            fill('[name="company_forms_user_info_create_form[email_confirmation]"]', 'company@gmail.com');
            fill('[name="company_forms_user_info_create_form[phone_number]"]', '1-541-754-3010  ');
            fill('[name="company_forms_user_info_create_form[password]"]',     'slavik123123Q!');
            fill('[name="company_forms_user_info_create_form[password_confirmation]"]', 'slavik123123Q!');
            break;
        case '/driver_leads':
            fill('#driver_lead_info_first_name',    'First name');
            fill('#driver_lead_info_last_name',     'Last name');
            fill('#driver_lead_info_primary_phone', '1-202-555-0131');
            fill('#driver_lead_info_email_address', 'lead@gmail.com');
        default:
            console.log(location.pathname)
    }
}

function fill(selector, value) {
    var input = document.querySelector(selector);
    input.value = value
}

function click(selector) {
    var element = document.querySelector(selector);
    element.click()
}

function select(selector, value) {
    var select = document.querySelector(selector);
    select.value = value;
    var event = new Event("chosen:updated");
    select.dispatchEvent(event);
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: start()
});
