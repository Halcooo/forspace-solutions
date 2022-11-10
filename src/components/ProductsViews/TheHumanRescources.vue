<template lang="">
  <div class="container">
    <div class="col-12">
      <h1>Ljudski resursi i obračun plaća</h1>
      <h4></h4>
      <p>
        Koristeći Forspace HR modul i modul OBRAČUNA PLAĆA vaša kompanija ima
        mogućnost vođenja evidencije uposlenih po najsavremenijim standardima.
        Od prilagodljivih podataka u personalnom kartonu, historiji kretanja
        poslovne karijere i slično, do automatiziranog modula za kreiranje
        ugovora koji u mnogome olakšava rad vaših HR uposlenika. Za modul
        obračuna plaća imate brojne olakšice i automatizacije, također i
        regularne postavke koje zadovoljavaju standard zakonodavstva i GDPR-a.
      </p>
    </div>
    <div class="col-12">
      <table>
        <tbody>
          <tr>
            <td class="d-flex justify-content-end">
              <img
                class="p-b-2"
                width="65vw"
                src="@/assets/images/icon-orange.png"
              />
            </td>

            <td>
              <h4>Registar uposlenih</h4>
              <h4>
                Evidencija članova porodica, nerezidenata/stranih lica, radnih
                dozvola, različitih certifikata
              </h4>
              <h4>Parametri za obračun plata</h4>
            </td>
          </tr>
          <tr>
            <td class="d-flex justify-content-end">
              <img
                class="p-b-2"
                width="65vw"
                src="@/assets/images/icon-orange.png"
              />
            </td>

            <td>
              <h4>Nadgledanje različitih izostanaka</h4>
              <h4>Evidencija radnih sati</h4>
              <h4>Informacije o zdravlju zaposlenika</h4>
            </td>
          </tr>
          <tr>
            <td class="d-flex justify-content-end">
              <img
                class="p-b-2"
                width="65vw"
                src="@/assets/images/icon-orange.png"
              />
            </td>
            <td>
              <h4>
                Evidencija o zaduženjima, otplatama dugova, izdržavanju djece
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row white-text-main">
      <div class="col-12">
        <div style="height: 10vw; overflow: hidden">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style="height: 100%; width: 100%"
          >
            <path
              d="M-68.29,88.12 C72.23,46.67 237.02,-34.25 522.57,80.22 L500.00,150.00 L2.82,155.22 Z"
              style="stroke: none; fill: #f16822"
            ></path>
          </svg>
        </div>
        <div class="hr orange-bg">
          <div class="row">
            <div class="col-12">
              <table>
                <tbody>
                  <tr>
                    <td class="d-flex justify-content-end">
                      <img
                        class="p-t-2"
                        width="65vw"
                        src="@/assets/images//icon.png"
                      />
                    </td>

                    <td>
                      <h4>
                        Fleksibilno definisanje postavki obračuna – profila za
                        obračun plata
                      </h4>
                      <h4>
                        Različite vrste obračuna na osnovu vrste radnog odnosa
                      </h4>
                      <h4>
                        Različite metode za vrste obračuna u zavisnosti od vrste
                        ustanove
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td class="d-flex justify-content-end">
                      <img
                        class="p-t-2"
                        width="65vw"
                        src="@/assets/images//icon.png"
                      />
                    </td>
                    <td>
                      <h4>Različite metode za obračun osnovne plate</h4>
                      <h4>
                        Unos, uređivanje ili brisanje podataka za više
                        zaposlenika istovremeno koristeći importere
                      </h4>
                      <h4>
                        Mogućnost ponovnog obračuna za pojedinog zaposlenika ili
                        za sve zaposlenike
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td class="d-flex justify-content-end">
                      <img
                        class="p-t-2"
                        width="65vw"
                        src="@/assets/images//icon.png"
                      />
                    </td>
                    <td>
                      <h4>
                        Upravljanje kratkoročnim i dugoročnim kreditima i drugim
                        odbicima
                      </h4>
                      <h4>
                        Upravljanje dodatnim uplatama (bonusi, naknade za topli
                        obrok i prevoz, povećanje radnog staža)
                      </h4>
                      <h4>
                        Mogućnost ispisa uplatnica u PDF-u ili slanja e-mailom
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td class="d-flex justify-content-end">
                      <img
                        class="p-t-2"
                        width="65vw"
                        src="@/assets/images//icon.png"
                      />
                    </td>
                    <td>
                      <h4>Automatsko knjiženje u glavnu knjigu</h4>
                      <h4>
                        Kontrola istovremene upotrebe i uređivanja podataka u
                        dosijeima zaposlenika tokom pripreme obračuna plata
                      </h4>
                      <h4 class="pb-5">Dokumenti o elektronskom plaćanju</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="appoitment-pages">
      <div class="row white-text-main">
        <div class="col-7">
          <p style="margin-left: 12vw !important">
            Osjećajte se slobodnim da rezervišete termin za sastanak sa našim
            timom za više informacija o našim proizvodima ili o procesima u
            vašoj kompaniji za koje je potrebno softversko rješenje i
            savjetovanje. Možda imamo upravo savršeno rješenje za vas na osnovu
            naše najbolje prakse i iskustva.
          </p>
        </div>
        <div class="col-5">
          <div class="button-white">
            <router-link to="/contact">REZERVIRAJTE TERMIN</router-link>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheHumanRescources",
};
</script>
<style lang="scss" scooped>
</style>
