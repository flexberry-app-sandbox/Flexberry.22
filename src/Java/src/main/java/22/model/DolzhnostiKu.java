package 22.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 22.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ДолжностиКу
 */
@Entity(name = "IIS22ДолжностиКу")
@Table(schema = "public", name = "ДолжностиКу")
public class DolzhnostiKu {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ИмяДол")
    private String имядол;


    public DolzhnostiKu() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getИмяДол() {
      return имядол;
    }

    public void setИмяДол(String имядол) {
      this.имядол = имядол;
    }


}