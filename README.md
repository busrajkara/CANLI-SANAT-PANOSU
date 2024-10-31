# Canlı Sanat Panosu

Bu proje, HTML, CSS ve JavaScript kullanarak tarayıcı tabanlı bir "Canlı Sanat Panosu" oluşturur. Kullanıcılar, panoya tıklayarak rastgele şekiller çizip çeşitli renklerde sanat eseri yaratabilirler. "Temizle" ve "Kaydet" gibi ek işlevlerle panoyu sıfırlayabilir veya sanat eserini cihazlarına indirebilirler.
##  Sayfanın Görselleri 
### Boş Sayfası 
![image](https://github.com/user-attachments/assets/b37ca636-012e-4fe5-9478-4852b43fdfbc)
### Görsel Kaydetme
![image](https://github.com/user-attachments/assets/31a37567-ca95-4afa-9afa-58226c7add8c)



## Proje Yapısı

- **`index.html`**: Web sayfasının temel yapısını ve düğmeleri içerir.
- **`script.js`**: Panoya şekil çizme, panoyu temizleme ve kaydetme gibi tüm işlevlerin JavaScript kodlarını içerir.
- **CSS (HTML dosyasına dahil edilmiştir)**: Web sayfasının stilini belirler ve projeyi görsel olarak kullanıcı dostu yapar.

## Özellikler

1. **Rastgele Şekil Çizimi**: Kullanıcı, panoya tıklayarak rastgele şekiller (daire, kare, üçgen) çizebilir. Her şekil rastgele bir renkte ve boyutta görünür.
2. **Temizle Butonu**: Panoyu sıfırlamak için "Temizle" düğmesine tıklayarak tüm çizimleri temizleyebilirsiniz.
3. **Kaydet Butonu**: Panodaki sanatı cihazınıza `.png` formatında kaydedebilirsiniz. Bu, sanatınızı paylaşmanıza veya saklamanıza olanak tanır.

## Nasıl Çalışır?

1. **HTML**: `index.html` dosyası, başlık (header), çizim panosu (canvas), ve "Temizle" ile "Kaydet" düğmelerini içerir. Basit bir kullanıcı arayüzü sağlamak için tüm elemanlar sayfanın ortasında hizalanmıştır.

2. **CSS**: Sayfanın düzenini ve renk şemalarını ayarlamak için CSS kullanılmıştır. `header` (başlık) bölümü ve düğmelere uygulanan renk geçişleri, kullanıcı deneyimini geliştirmek için tasarlanmıştır.

3. **JavaScript**: `script.js` dosyası ile şekillerin çizilmesi, renklerin rastgele seçilmesi, panonun temizlenmesi ve kaydedilmesi gibi işlevler gerçekleştirilir.
   - **Rastgele Şekil Üretme**: `createRandomShape` fonksiyonu ile her tıklamada bir şekil rastgele konum, renk ve boyutta oluşturulur.
   - **Panoyu Temizleme**: `clearCanvas` fonksiyonu, panoyu sıfırlayarak temiz bir sayfa başlatır.
   - **Sanat Kaydetme**: `saveCanvas` fonksiyonu, panodaki resmi `.png` formatında indirilebilir bir dosya olarak kaydeder.

## Kullanım

1. **Projeyi Çalıştırma**: `index.html` dosyasını bir tarayıcıda açarak projeyi başlatabilirsiniz.
2. **Sanat Oluşturma**:
   - Panoya tıklayarak şekiller çizin.
   - "Temizle" düğmesi ile panoyu sıfırlayın.
   - "Kaydet" düğmesine tıklayarak sanatınızı cihazınıza indirin.


### Örnek Kod Parçaları

- **Rastgele Renk Üretme**:
  ```javascript
  function getRandomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }


 ## Geliştirme İpuçları
**1** Projeyi farklı şekiller veya ek efektlerle genişletebilirsiniz.
**2**  script.js içindeki fonksiyonları, renk seçiminden şekil boyutuna kadar istediğiniz gibi düzenleyerek daha fazla özelleştirme ekleyebilirsiniz.

