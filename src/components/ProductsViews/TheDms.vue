<template lang="">
  <div class="container mt-5 purchase">
    <h1>Dokument Manadžment Sistem (DMS)</h1>
    <h3>Dostupan i praktičan</h3>
    <p>
      Dokument Manadžment Sistem (DMS) se koristi za upravljanje svim
      dokumentima u kompaniji. Omogućava pohranjivanje svih vrsta dokumenata
      istim principom kako pohranjujemo fizičku dokumentaciju. Ako fizičku
      dokumentaciju zaprimamo i razvrstavamo u registratorima, isto radimo u
      DMS-u pomoću elektronsih registratora. <br /><br />Ovo je samo jedan mali
      dio funkcionalnosti našeg DMS sistema koji je u potpunosti integrisan i sa
      finansijskim tokom dokumentacije koju pohranjujemo, tako da sve podatke
      koji su bitni (kupci, dobavljači, iznosi, brojevi dokumenta i slično)
      unosimo u sistem i dalje ih koristimo za knjiženje i izvještavanje.
    </p>
    <div class="container">
      <img src="@/assets/images/DOCUMENT-MANAGEMENT.png" alt="image" />
      <img src="@/assets/images/dms-pic.png" alt="img" />
    </div>
    <div class="row white-text dms">
      <div class="col-12">
        <div style="height: 10vw; overflow: hidden"></div>
        <div class="dms-in-out">
          <div class="dms-text white-text-main">
            <h1>Ulazni i izlazni dokumenti</h1>
            <p>Izdavanje i zaprimanje faktura</p>
          </div>
          <div class="row">
            <div class="col-12 in-out-dms">
              <table class="white-text-main">
                <tbody>
                  <tr>
                    <td class="d-flex justify-content-end">
                      <img
                        width="50vw"
                        src="@/assets/images/check.png"
                        alt=""
                      />
                    </td>
                    <td>
                      <h4>
                        Unos ulaznih faktura i započinjanje postupka odobrenja
                        kroz unaprijed definisani radni tok
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td class="d-flex justify-content-end">
                      <img width="50vw" src="@/assets/images/check.png" />
                    </td>
                    <td>
                      <h4>
                        Izdavanje izlaznih faktura i pripremanje potrebnih
                        dokumenata
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td class="d-flex justify-content-end">
                      <img width="50vw" src="@/assets/images/check.png" />
                    </td>
                    <td>
                      <h4>
                        Mogućnost kloniranja ponavljajućih izlaznih faktura
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td class="d-flex justify-content-end align-middle">
                      <img width="50vw" src="@/assets/images/check.png" />
                    </td>
                    <td>
                      <h4 style="margin-bottom: 2px">
                        Mogućnost povezivanja ulaznih faktura sa odobrenim
                        narudžbama
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td class="d-flex justify-content-end">
                      <img width="50vw" src="@/assets/images/check.png" />
                    </td>
                    <td>
                      <h4 style="margin-bottom: 2px">
                        Automatska provjera potrošnje budžeta
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td class="d-flex justify-content-end">
                      <img width="50vw" src="@/assets/images/check.png" />
                    </td>
                    <td>
                      <h4 style="margin-bottom: 2px">
                        Integracija sa POS terminalima
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td class="d-flex justify-content-end">
                      <img width="50vw" src="@/assets/images/check.png" />
                    </td>
                    <td>
                      <h4 style="margin-bottom: 2px">
                        Rezervacija robe (ulazne i izlazne skladišne
                        transakcije)
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td class="d-flex justify-content-end">
                      <img width="50vw" src="@/assets/images/check.png" />
                    </td>
                    <td>
                      <h4 style="margin-bottom: 2px">
                        Praćenje zaliha - detaljne informacije o protoku robe na
                        osnovu stavki na fakturama
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td class="d-flex justify-content-end">
                      <img width="50vw" src="@/assets/images/check.png" />
                    </td>
                    <td>
                      <h4 style="margin-bottom: 2px">
                        Automatsko računovodstvo na osnovu unaprijed definisanih
                        profila rezervacija
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheDms",
};
</script>
<style lang="scss" scooped>
img {
  margin-right: 8px;
}
</style>
