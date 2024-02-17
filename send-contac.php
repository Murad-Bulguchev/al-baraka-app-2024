<?php 

require __DIR__ . './vendor/autoload.php';

if(isset($_POST['phone'])) {
    try {
        $subdomain = 'inforus453';
        $login = 'dev@emfy.com';
        $apikey = '82470d5615269f9191fd372eb5532a841aa78b5d';

        $amo = new \AmoCRM\Client($subdomain, $login, $apikey);

        $lead = $amo->lead;
        $lead['name'] = $_POST['product_name'];
        $lead['responsible_user_id'] = 2462338;
        $lead['pipeline_id'] = 1207249;

        $lead->addCustomField(118101, [
            [$_POST['phone']],
        ])

        $lead->addCustomField(118103, [
            [$_POST['email']],
        ])

        $lead->addCustomField(221937, [
            [$_POST['city1']],
        ])

        $id = $lead->apiAdd()

        $contact $amo->contact;

        $contact['name']= isset($_POST['name']) ? $_POST['name'] : 'Не указано';
        $contact['linked_leads_id'] = [(int)$id];

        $contact->addCustomField(111447, [
            [$_POST['phone'], 'MOB'],
        ])

        $contact->addCustomField(111449, [
            [$_POST['email'], 'PRIV'],
        ])

        $contact->addCustomField(175451, [
            [$_POST['city1']],
        ])

        $contact->addCustomField(221943, [
            [$_POST['experience']],
        ])

        $id = $contact->apiAdd()

        $lead->addCustomField()

    } catch (\AmoCRM\Exception $e) {
        printf('Error (%d): %s' . PHP_EOL, $e->getCode(), $e->getMessage());
    }
}

$test='dsa';
console_log($test);

?>